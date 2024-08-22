
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
    <h1>Glambeleza 😁</h1>
    <h2>{name}</h2>
    <h3>{email}</h3>

    <p>{message}</p>
  </div>
);
