import userModel from "../config/models/userModel";

export const getUserData = (req, res) => {
    try {
        const {userId} = req.body;

        const user = userModel.findOne({ _id: userId });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({
            success: true,
            userData: {
                name: user.name,
            }
        })

    } catch (error) {
            res.json({ success: false, message: error.message });
    }
}