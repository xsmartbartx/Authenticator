import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../config/models/userModel.js';
import transporter from '../config/nodemailer.js';

export const register = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({success: false, message: "Please fill all the fields!"})

    }

    try {

        const existingUser = await userModel.findOne({email})

        if (existingUser) {
            return res.json({success: false, message: "User already exists!"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new userModel({
            name,
            email,
            password: hashedPassword
        });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({success: false, message: "Please fill all the fields!"})
    }

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({success: false, message: "User not found!"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({success: false, message: "Invalid credentials!"});
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: user.email,
            subject: 'Login Notification',
            text: `Hello ${user.name},\n\nYou have successfully logged in to your account.\n\nThank you!`
        };

        await transporter.sendMail(mailOptions);

        return res.json({success: true});

    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        });

        return res.json({success: true, message: "Logged out successfully!"});

    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}

export const sendVerifyOtp = async (req, res) => {
    try {

        const {userId} = req.body;

        const user = await userModel.findById(userId);

        if (user.isAccountVerified) {
            return res.json({success: false, message: "Account already verified!"});
        }

       const otp = String(Math.floor(100000 + Math.random() * 900000)).toFixed(0);

       user.verifyOtp = otp;
       user.verifyOtpExpiresAt = Date.now() + 24 * 60 * 60 * 1000

       await user.save();

       const mailOptions = {
           from: process.env.SMTP_USER,
           to: user.email,
           subject: 'Verify Your Account',
           text: `Hello ${otp},\n\nYour verification code is: ${otp}\n\nThis code is valid for 24 hours.\n\nThank you!`
       };
       await transporter.sendMail(mailOptions);

       res.json({success: true, message: "OTP sent to your email!"});

    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export const verifyEmail = async (req, res) => {
    const { userId, otp } = req.body;

    if (!userId || !otp) {
        return res.json({success: false, message: "Please provide user ID and OTP!"});
    }
}