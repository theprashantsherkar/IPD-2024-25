import jwt from 'jsonwebtoken';

export default function isAuthenticated(req, res, next) {
    const { id } = req.cookies;
    if (!id) {
        return res.status(404).json({
            success: false,
            message:"User not authenticated"
        })
    }

    try {
        const decoded = jwt.verify(id, process.env.JWT_KEY);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(404).json({
            success: false,
            message:"jwt error check is Auth middleware"
        })

    }
}