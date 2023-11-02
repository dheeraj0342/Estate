import User from '..//models//user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;
    const hashpassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashpassword});
    try {
        await newUser.save();
        res.status(201).json({"message":"User created successfully!"});
        
    } catch (error) {
        next(error);
    }
    
}
export const signin = async (req, res,next) => {
    const { email, password } = req.body;
    try {
        const validuser = await User.findOne({ email });
        if (!validuser) {
            return next(handleError(res, 401, 'Invalid credentials'));
        }
        const validpassword = bcrypt.compareSync(password, validuser.password);
        if (!validpassword) {
            return nwxt(handleError(res, 401, 'Invalid credentials'));
        }
        const token = jwt.sign({ id: validuser._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        const { password: userpassword, ...user } = validuser._doc;
        res.cookie('token', token, { httpOnly: true })
        .status(200).json(user);
    } catch (error) {
        next(error);
    }
}


