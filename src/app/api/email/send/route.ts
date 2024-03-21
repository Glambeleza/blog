import { Resend } from "resend";
import { env } from "@/src/env";
import { EmailTemplate } from "@/src/components/templates/email";
import { NextRequest, NextResponse } from "next/server";
import { FormProps } from "@/src/app/(blog)/contact/components/form/form";

interface EmailProps {
  props: FormProps;
}

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: EmailProps = await request.json();
    const { name, email, message } = body.props;
    const { data, error } = await resend.emails.send({
      from: `Glambeleza <${env.RESEND_API_EMAIL}>`,
      to: [env.RESEND_API_EMAIL],
      subject: "Blog - Nova mensagem de contato! 📬",
      react: EmailTemplate({
        name,
        email,
        message,
      }),
      text: "",
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
