import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: Number, // in km
    default: 0,
  },
  capacity: {
    type: Number,
    default: 0,
  },
  lon: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  contact: {
    type: String,
  },
  time: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model("facilities", userSchema)

export default userModel;