const nodeMailer = require("nodemailer");

const sendEmail = async(option)=>{
    const transporter=nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port :process.env.SMTP_PORT, //587 for gmail and 465 for outlook
        service: process.env.SMTP_SERVICE,
        auth:{
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailOPtions ={
        from: process.env.SMTP_MAIL,
        to: option.email,
        subject: option.subject,
        text: option.Message,
        // html: option.message
    };
    await transporter.sendMail(mailOPtions);
};

module.exports = sendEmail;