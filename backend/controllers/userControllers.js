
const User = require('../models/userModel');
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const QueueHandler = require('../QueueHandler');


const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(404);
        throw new Error("User already exists");
      }
    
      const user = await User.create({
        firstName,
          lastName,
        email,
        password,
      });
    
      if (user) {
        res.status(201).json({
          _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
          email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("User not found");
      }
    
};
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName:user.lastName,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
      });
    } else {
      res.status(404);
      throw new Error("Invalid Email or Password");
    }
});
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName:updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const StartScreening = async (req, res) => {
  let queueHandler = new QueueHandler()
  const {patient:{ firstName, lastName, email} } = req.body;
  const StartSessionMessage ={
    SessionConfiguration: {
      SessionLengthInMin : 5,
      LettersDelayInSec : 1,
      DisturbanceTimeRangeMin : 5,
      DisturbanceTimeRangeMax :5,
      AmountOfShouldPress :2
      },
    Patient: 
    { 
      firstName:firstName, 
      lastName:lastName, 
      email:email}
  }
  queueHandler.sendMessage('StartScreening', JSON.stringify(StartSessionMessage));
  /*queueHandler.receiveMessages('FinishScreening',(msg) =>{
    
  })*/
  //console.log(email);
  res.status(200);
  res.send();
};

const StopScreening = async (req, res) => {
  let queueHandler = new QueueHandler()
  queueHandler.sendMessage('StopScreening', '');
  //console.log(email);
  res.status(200);
  res.send();
};

module.exports = { registerUser, authUser,updateUserProfile,StartScreening,StopScreening};


