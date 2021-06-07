const Joi = require("joi");

const formValidation = {
    name: Joi.string().required(),
    email: Joi.string().email(),
    gender: Joi.string().required(),
    race: Joi.string().required(),
    citizen: Joi.string().required(),
    workAuthorization: Joi.string().required(),
    qualification: Joi.string().required(),
    dob: Joi.string().required(),
    employmentStatus: Joi.string().required(),
    tuitionISA: Joi.string().required(),
    expectations: Joi.string().required(),
    aboutDecagon:Joi.string().required(),
};

module.exports = {
    formValidation
}