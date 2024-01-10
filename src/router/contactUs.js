const express = require('express');
const router = express.Router();

const contactUs = require('../model/contactUs');

router.route("/contact-us")
    .post(async (req, res) => {
        try {
            const newMessage = new contactUs(req.body);
            const result = await newMessage.save();

            const info = {
                status: true,
                message: `Thank you for reaching Us we will contact you at ${result.email}`,
            }
    
            res.status(201).send(info);
        } catch (err) {
            const info = {
                status: false,
                message: "Something Went Wrong!..."
            }
            console.log(err);
            res.status(400).send(info);
        }
    });
module.exports = router;