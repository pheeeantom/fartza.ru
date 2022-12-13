const nodemailer = require('nodemailer');
const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");

const transpoter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'fartsa-market@mail.ru',
        pass: '6psE0XK9EyfSyMh3B1qL',
    },
    tls: {
        rejectUnauthorized: false,
    },
});

exports.sendConfirmation = function sendConfirmation(to) {
    const mailOptions = {
        from: '"FARTSA.RU" <fartsa-market@mail.ru>',
        to: to,
        subject: 'Test subject',
        text: 'Для подтверждения почты перейдите по ссылке - http://localhost:3000/confirm?token=' + jwt.sign({email: to}, config.secret),
    };

    transpoter.sendMail(mailOptions, (err, info) => {
        console.log(err, info);
    });
}