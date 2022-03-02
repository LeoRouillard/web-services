const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName:{type: 'string',required: true},
        lastName:{type: 'string',required: true},
        username:{type: 'string',required: true, unique: true},
        email:{type: 'string',required: true, unique: true},
        password:{type: 'string',required: true},
        phone:{type: 'string',required: true},
        isAdmin:{type: 'boolean',default: false},
    },
    {timestamps: true}
);

module.exports = mongoose.model('User', UserSchema);