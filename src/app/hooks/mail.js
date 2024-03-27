const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'andrew13338@gmail.com',
    pass: process.env.MAIL_KEY
  }
});

function sendEmailToCustomer(customerEmail, customerName, subject, message) {

  const mytext = {

    text:`Order from ${customerName}, the message :${message}`,

    subject: subject

  }

  const emailHtmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Message to ${customerName}</title>
        <style>
        body{
        background-color: rgb(4,170, 109);
        align-items: center;
        justify-content: center;
        color: black;
        }
        .div1 {
            border-radius: 3%;
        background-color: rgb(4,170, 109);
            align-items: center;
        justify-content: center;
        padding:20px;
        border-style: solid;
        border-color: black;
        height: 40vh;
        width: 40vh;
        }
        img {
        height: 20vh;
        margin-left: 11vh;
        }
        </style>
    </head>
    <body>
    <div class="div1">
        <img src="https://sun9-41.userapi.com/impg/SZfyKhZDAgVTVplc_EzdppqbT6CnvXEQyPjXjw/ZFHXUmIeuWM.jpg?size=867x1156&quality=95&sign=c175702d1193c84e85d2ef150e6ad7d3&type=album">
        <h1>Hello ${customerName},</h1>
        <h2>Soon i will contact you</h2>
    </div>
    </body>
    </html>
  `;

  let mailOptions = {
    from: '"Andrey" <andrew13338@gmail.com>',
    to: customerEmail,
    subject: 'Order for programming',
    html: emailHtmlContent
  };

  let mailOptions1 = {
    from: '"Andrey" <your-email@gmail.com>',
    to: 'andrew13338@gmail.com',
    subject: `Order for programming ${mytext.subject}`,
    text: mytext.text
  };

  return transporter.sendMail(mailOptions)
  .then(() => {
    return transporter.sendMail(mailOptions1);
  });
}

export default sendEmailToCustomer