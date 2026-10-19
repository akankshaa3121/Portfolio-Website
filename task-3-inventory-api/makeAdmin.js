require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

async function makeAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const user = await User.findOneAndUpdate(
      { email: "admincheck@example.com" },
      { role: "admin" },
      { returnDocument: "after", runValidators: true }
    );

    if (!user) {
      console.log("User not found. Register the test account first.");
    } else {
      console.log("User promoted to admin:", user.email, user.role);
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    await mongoose.disconnect();
  }
}

makeAdmin();