// To connect with your mongoDB database
const express = require("express");
const router = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://SoccerScoreUser1:SoccerScore@cluster0.t5zdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

// For backend and express
const cors = require("cors");
console.log("App listen at port 5000");
router.use(express.json());
router.use(cors());
router.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
});

// Schema for users of app
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    team: {
        type: String,
    },
});

const User = mongoose.model('users', UserSchema);
User.createIndexes();

router.post("/addNewUser", async (req, res) => {
    const newuser = new User(req.body);
    newuser.save()
    .then((result) => {
        console.log(result);
        res.status(200).json({message: "User added." });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ message: err });
    });
});

router.get("/getUserInfo", function (req, res) {
    User.find()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err });
    });
});

router.listen(5000);
