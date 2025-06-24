import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host:,
    port: 587, // or 465 for secure SMTP
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export default transporter;