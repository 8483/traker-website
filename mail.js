const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

function isValidEmail(email) {
    regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    return email.match(regex);
}

/*
    sales@cortex.mk

    - send during work days M - F, work hours 07:00 - 15:00
    - send on 5 min interval, randomize +- 1 min
    - slightly change content for each email

    Email Settings
    Mail Server Username: sales@cortex.mk

    Standard (without SSL)

    Incoming Mail Server: mail.cortex.mk
    Supported Ports: 143 (IMAP), 110 (POP3)
    Outgoing Mail Server: mail.cortex.mk
    Supported Port: 26 (server requires authentication)
    Private (with SSL)

    Incoming Mail Server: just121.justhost.com (SSL)
    Supported Ports: 993 (IMAP), 995 (POP3)
    Outgoing Mail Server: just121.justhost.com (SSL)
    Supported Port: 465 (server requires authentication)
    Supported Incoming Mail Protocols: POP3, IMAP
    Supported Outgoing Mail Protocols: SMTP
*/

router.post("/mail-message", async function (req, res, next) {
    let sender = req.body.sender;
    let message = req.body.message;

    if (isValidEmail(sender)) {
        try {
            let html = `
                <p>
                    ${message}               
                </p>
            `;

            let mailOptions = {
                from: sender,
                to: "sales@cortex.mk",
                subject: `Traker - Порака`,
                // text: // plain text body
                html: html,
            };
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                name: "cortex.mk", // needed to send to gmail, yahoo
                host: "just121.justhost.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: "sales@cortex.mk", // generated ethereal user
                    pass: "gagajazik888", // generated ethereal password
                },
            });

            // send mail with defined transport object
            transporter.sendMail(mailOptions, async (error, info) => {
                if (error) {
                    console.log("transporter error: ", error);
                    return;
                }
                // If sent
                // console.log(info);
                res.status(200).send({
                    status: 200,
                    message: "Успешно испратена порака. Ќе бидете контактирани набрзо.",
                });

                // Preview only available when sending through an Ethereal account
                // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            });
        } catch (err) {
            // console.log("try catch Error: " + err);
            res.status(300).send({
                status: 300,
                message: "Неуспешно испратена порака. Ве молиме обидете се повторно.",
            });
        }
    }
});

router.post("/mail-demo", async function (req, res, next) {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;

    console.log(name, email, phone);

    if (isValidEmail(email)) {
        try {
            let html = `
                <p>
                    Име: ${name}
                    <br><br>
                    Емаил: ${email}
                    <br><br>
                    Телефон: ${phone}
                </p>
            `;

            let mailOptions = {
                from: email,
                to: "sales@cortex.mk",
                subject: `Traker - Демо`,
                // text: // plain text body
                html: html,
            };
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                name: "cortex.mk", // needed to send to gmail, yahoo
                host: "just121.justhost.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: "sales@cortex.mk", // generated ethereal user
                    pass: "gagajazik888", // generated ethereal password
                },
            });

            // send mail with defined transport object
            transporter.sendMail(mailOptions, async (error, info) => {
                if (error) {
                    console.log("transporter error: ", error);
                    return;
                }
                // If sent
                // console.log(info);
                res.status(200).send({
                    status: 200,
                    message: "Успешно испратени информации. Ќе бидете контактирани набрзо.",
                });

                // Preview only available when sending through an Ethereal account
                // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            });
        } catch (err) {
            // console.log("try catch Error: " + err);
            res.status(300).send({
                status: 300,
                message: "Неуспешно испратени информации. Ве молиме обидете се повторно.",
            });
        }
    }
});

module.exports = router;
