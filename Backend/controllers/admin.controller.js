const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// exports.getAdmin = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(404).json({ message: "Please add all the Fields" });
//   }

//   try {
//     let admin = await Admin.findOne({ email });
//     if (!admin) {
//       res.json({ error: "user does not exist or password is incorrect" });
//       return;
//     }

//     bcrypt.compare(password, admin.password, (err, result) => {
//       if (result) {
//         let token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET_KEY);
//         console.log(token);
//         res.status(200).json({ token: token, role: "admin" });
//         return;
//       } else {
//         res.json({ error: "email or password is incorrect" });
//         return;
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ message: "Please add all the Fields" });
  }

  try {
    let admin = await Admin.findOne({ email });
    if(!admin) return res.status(401).json({ message: "Invalid credentials" });
    
    if (email !== admin.email)
      return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY);

    res.json({
      message: "Login successful",
      success: true,
      token
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token").json({ message: "Logged out" });
};

exports.dashboard = (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard" });
};

// exports.createAdmin = async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(404).json({ message: 'Please add all the Fields' })
//     }

//     try {
//         bcrypt.hash(password, 10, async (err, hash) => {
//             let admin = await Admin.findOne({email});
//             if(admin) res.status(401).send("user already exists");
//             const newAdmin = await Admin.create({email, password: hash});
//             console.log(newAdmin);
//             let token = jwt.sign({email: newAdmin.email}, process.env.JWT_SECRET_KEY);
//             console.log(token);
//             res.cookie("token", token);
//             res.status(201).send('User registered');
//         })
//     } catch (error) {
//         console.log(error);

//     }
// }
