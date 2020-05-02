// const Joi = require('joi');

// const registerValidation = (data) => {
//     const schema = Joi.object().keys({
//         phone: Joi.number().min(000000000).max(999999999).required(),
//         name: Joi.string().min(6).required(),
//         password: Joi.string().min(6).required(),
//         email: Joi.string().min(6).email(),
//     });

//     return Joi.validate(data, schema);
// };

// const loginValidation = (data) => {
//     const schema = Joi.object().keys({
//         phone: Joi.number().min(000000000).max(999999999).required(),
//         password: Joi.string().min(6).required(),
//     });

//     return Joi.validate(data, schema);
// };

// module.exports.registerValidation = registerValidation;
// module.exports.loginValidation = loginValidation;