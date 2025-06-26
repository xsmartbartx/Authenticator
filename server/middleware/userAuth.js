import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized access!" });
    }

    try {

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}