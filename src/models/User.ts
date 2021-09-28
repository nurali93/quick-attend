import mongoose, { Schema } from "mongoose"

export const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    emailVerified: String,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);