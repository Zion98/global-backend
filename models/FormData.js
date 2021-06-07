const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formDataSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		race: {
			type: String,
			required: true,
		},
		citizen: {
			type: String,
			required: true,
		},
		workAuthorization: {
			type: String,
			required: true,
		},
		qualification: {
			type: String,
			required: true,
		},
		dob: {
			type: String,
			required: true,
		},
		employmentStatus: {
			type: String,
			required: true,
		},
		tuitionISA: {
			type: String,
			required: true,
		},
		expectations: {
			type: String,
			required: true,
		},
        aboutDecagon:{
            type: String,
            required: true
        }
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('formDatas', formDataSchema);
