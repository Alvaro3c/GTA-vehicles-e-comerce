const pool = require("../utils/db-sql-orders");
const { hashPassword, comparePasswords, generateToken } = require("../utils/authUtils");

const register = async (req, res) => {
    try {
        const { nick_name, email, password } = req.body;

        // Check if the email already exists
        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(409).json({ message: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Insert the new user into the database
        const newUser = await pool.query(
            "INSERT INTO users (nick_name, email, password) VALUES ($1, $2, $3) RETURNING id_user",
            [nick_name, email, hashedPassword]
        );

        const userId = newUser.rows[0].id_user;
        const userData = newUser.rows[0];

        // Generate a JWT token
        const token = generateToken(userId);

        res.status(201).json({ message: "User registered successfully", token, userData });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Error registering user" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Compare the password
        const match = await comparePasswords(password, user.rows[0].password);
        if (!match) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const userId = user.rows[0].id;
        const userData = user.rows[0];
        // Generate a JWT token
        const token = generateToken(userId);

        res.status(200).json({ message: "Login successful", token, userData });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Error logging in" });
    }
};
module.exports = {
    login, register
};