import jwt from "jsonwebtoken";

const generateToken = (id, email, isAdmin) => {
  return jwt.sign({ id, email, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
