

export const register = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({success: false, message: "Please fill all the fields!"})

    }

    try {

    } catch (error) {
        res.json({success: false, message: error.message});
    }

}