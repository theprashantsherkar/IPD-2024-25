import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Admin } from '../models/adminModel.js';

export const handler = (req, res) => {
    return res.json({
        message: "this is a temporary api"
    })
}


export const loginHandler = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "please fill all the fields"
        })
    }

    const admin = await Admin.findOne({email});
    if (!admin) {
        return res.status(404).json({
            success: false,
            message: "Sign up first"
        })
    }

    const isMatched = await bcrypt.compare(password, admin.password);

    if (!isMatched) {
        return res.status(400).json({
            success: false,
            message: "wrong password"
        })
    }
    const token = jwt.sign({ _id: admin.id }, process.env.JWT_KEY);
    res.cookie("token", token, {
        httpOnly: true,
        maxAge:  86400000,
    }).status(200).json({
        success: true,
        message: `Welcome back ${admin.adminName}`
    })

};

export async function signupHandler(req, res) {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({
            success: false,
            message: "please fill all the fields"
        })
    }

    const alreadyExist = await Admin.findOne({email});
    if (alreadyExist) {
        return res.status(404).json({
            success: false,
            message: "Email already registered"
        })
    }

    const hanshedPass = await bcrypt.hash(password, 10);
    const admin = await Admin.create({
        adminName: name,
        email,
        password: hanshedPass,
    });

    if (!admin) {
        return res.json({
            success: false,
            message:"something went wrong"
        })
    }

    const token = jwt.sign({ _id: admin.id }, process.env.JWT_KEY);

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 86400000,
    }).status(200).json({
        success: true,
        message: `Account created, Welcome ${admin.adminName}`
    });


}


export async function logoutHandler(req, res) {
    res.clearCookie("token").status(200).json({
        success: true,
        message: "Logged out successfully"
    })
}