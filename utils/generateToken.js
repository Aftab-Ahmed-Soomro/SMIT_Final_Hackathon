import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, "a1B2c3D4e5F6g7H8i9J0kL1m2N3oP4Q5r6S7t8U9V0", { expiresIn: '30d' });
};

export default generateToken;
