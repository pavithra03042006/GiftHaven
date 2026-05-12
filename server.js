const express = require("express");
const cors = require("cors");
const twilio = require("twilio");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const client = twilio(
    process.env.ACCOUNT_SID,
    process.env.AUTH_TOKEN
);

app.post("/send", async (req, res) => {

    const { name, email, message } = req.body;

    try {

        await client.messages.create({

            body:
`New Contact Message

Name: ${name}

Email: ${email}

Message:
${message}`,

            from: process.env.TWILIO_NUMBER,

            to: "+919597910333"

        });

        res.send("SMS Sent Successfully");

    } catch(err){

        console.log(err);

        res.status(500).send("Error Sending SMS");
    }
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});
