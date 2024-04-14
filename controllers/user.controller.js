const { movies } = require("../models/movie.model");
const { user } = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");


const signup = async (req, res) => {
  try {
    const { email_address, first_name, last_name, contact, password } =
      req.body;

    const uuid = uuidv4();
    const accessToken = tokgen.generate();
    let id = user.countDocuments();

    const newuser = new user({
      userid: id + 1,
      email: email_address,
      first_name: first_name,
      last_name: last_name,
      username: first_name + last_name,
      contact: contact,
      password: password,
      uuid: uuid,
      accesstoken: accessToken,
      isLoggedIn: true,
    });

    const output = newuser.save();
    if (output) {
      return res.status(200).json(output);
    }
  } catch (error) {
    return res.status(400).json("something goes wrong while creating user");
  }
};



const login = async (req, res) => {
  try {
    let foundUser = await user.findOne({
      username: req.body.username,
      password: req.body.loginPassword,
    });
    if (!foundUser) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    return res.status(200).json(foundUser);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong while checking user" });
  }
};





const logout = async (req, res) => {
  const {uuid} = req.body;
  try {
      const user = await user.findOne({uuid});
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      user.isLoggedIn = false;
      await user.save();
  
      res.status(200).json({ message: 'Logged Out successfully.' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to log out' });
    }
  };




const coupons = async (req, res) => {
  const code = req.params.code;

  try {
    let discount = await user.find({ userid: code }).select("coupens");
    if (!discount) {
      return res.status(404).json("no data found");
    }
    return res.status(200).json(discount);
  } catch (error) {
    return res.status(400).json("cannont find discount coupons");
  }
};



const bookings = async (req, res) => {
  const {customerUuid , bookingRequest} = req.body;
  console.log(bookingRequest);
  try {
    const user = await user.findOne({uuid : customerUuid});

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
   
    console.log(user);
     user.bookingRequests.push(bookingRequest);
    await user.save();

    res.status(201).json({ message: 'Show booked successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to book show' });
  }
};


module.exports = { login, signup, coupons, bookings,logout };
