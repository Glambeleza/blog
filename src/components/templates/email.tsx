import Image from "next/image";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Olá, sou eu novamene 😁!</h1>
    <p>
      Tu tem uma mensagem nova de <strong>{name}</strong>
    </p>
    <p>
      <strong>{email}</strong>
    </p>

    <p>{message}</p>
  </div>
);
