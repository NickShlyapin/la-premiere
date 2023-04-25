import nodemailer from "nodemailer";

export default async function getServerSideProps(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: req.body.userEmail,
      to: "bronilapremiere@gmail.com",
      subject: `Новая заявка от ${req.body.userName}`,
      html: `<div>Имя: ${req.body.userName}</div></br><div>Телефон: ${req.body.userPhone}</div><div>Дата: ${req.body.userDate}</div><div>Время: ${req.body.userTime}</div><div>Кол-во гостей: ${req.body.userGuest}</div><div>Сообщение: ${req.body.userMessage}</div>`,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || error.toString(),
    });
  }
  return res.status(200).json({ error: "" });
}
