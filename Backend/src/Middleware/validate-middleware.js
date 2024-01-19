
const validate = (Schema) => async (req,res,next) => {
    try {
        const parseBody = await Schema.parseAsync(req.body);
        req.body = parseBody;
        next();
        
    } catch (error) {
        const status = 422;
        const message = "fill all the fields"
        const extraMessage = error.errors[0].message;

        const errors = {
            status,message,extraMessage
        }
        next(errors)
    }

}

module.exports = validate