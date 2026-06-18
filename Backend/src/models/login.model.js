import { Schema, model } from "mongoose";

const loginSchema = new Schema({
  fullname : {
    type: String,
    required: true,
    },
    email: {
    type: String,
    required: true,
    unique: true,   
    },
    password: {
    type: String,
    required: true,
    },
});

const loginModel = model("Login", loginSchema);
export default loginModel;