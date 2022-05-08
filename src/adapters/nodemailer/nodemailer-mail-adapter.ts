import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail.adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bd0ab44f853410",
    pass: "9ab95b8775e944"
  }
});

export class NodemailerMailAdapter  implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
      from: 'Equipe feedget <oi@feedget.com>',
      to: 'laurovneto <lauro.neto.1995@gmail.com>',
      subject: subject,
      html: body,
    }); 
  };
}