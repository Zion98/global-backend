const express = require("express");
const mongoose = require("mongoose");

const Form = require("../models/FormData")

async function createData(req, res) {
    try {
        const { name, email, gender, 
        race, citizen, workAuthorization, 
        qualification, dob, employmentStatus,
        tuitionISA, expectations, aboutDecagon} = req.body;

        const newData = new Form ({
            name, email, gender, 
        race, citizen, workAuthorization, 
        qualification, dob, employmentStatus,
        tuitionISA, expectations, aboutDecagon
        })
        newData.save()

        return res.status(201).json({
            status: true,
            message: "Data successfully created",
            data: newData
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }
}

async function getData(req, res) {
    try{
        Form.find().then(data => {
            if (data) {
                return res.status(200).json({
                    data
                });
            }
            return res.status(400).send("Something went wrong");
        })
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }
}

module.exports = {
    createData,
    getData,
}