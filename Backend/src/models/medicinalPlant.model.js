import { Schema, model } from "mongoose";

const medicinalPlantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const medicinalPlantModel = model("MedicinalPlant", medicinalPlantSchema);
export default medicinalPlantModel;