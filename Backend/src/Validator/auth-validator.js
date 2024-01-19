const {z} = require('zod')
const validate = require('../Middleware/validate-middleware')


const signupSchema = z.object({
    name: z.string({required_error:"Name is required"})
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters"),

    last: z.string({required_error:"Last Name is required"})
    .trim()
    .min(2, "Last Name must be at least 2 characters long")
    .max(50, "Last Name cannot exceed 50 characters"),

    email: z.string({required_error:'Email address is required'})
    .trim()
    .email("Invalid Email Address")
    .min(5, "email must be at least 2 characters long")
    .max(50, "email cannot exceed 50 characters"),

    password: z.string({required_error:'Password is required'})
    .trim()
    .min(8, 'Password should have at least 8 characters'),

    number: z.string({required_error:'number is required'})
    .trim()
    .min(10, 'Mobile number should have at least 10 characters')
});


const loginSchema = z.object({
    email: z.string({required_error:'Email address is required'})
    .trim()
    .email("Invalid Email Address")
    .min(5, "email must be at least 2 characters long")
    .max(50, "email cannot exceed 50 characters"),

    password: z.string({required_error:'Password is required'})
    .trim()
    .min(8, 'Password should have at least 8 characters'),
})

const courseUpload = z.object({
    title :z.string({required_error:'Course Title is required'})
    .trim()
    .max(100,'Title can not exceed more than 100 characters'),

    description : z.string({required_error:'Course description is required'})
    .trim(),

    images : z.string({required_error:'Course Image Link are  required'})
    .url('Please provide a valid image URL'),

    price : z.number({required_error:'Course Price  are  required'}),
    // expiryDate: z.date({required_error:'Course expiry Date are required '})
})
module.exports = { signupSchema , loginSchema , courseUpload };