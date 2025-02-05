const { StudentSchemaValidate, Strunet } = require("../model/student")


class joiController {

    async create(req, res) {

        try {
            const data = {
                name: req.body.name,
                email: req.body.email
            }
            //validating the request
            const { error, value } = StudentSchemaValidate.validate(data)
            if (error) {
                return res.status(401).json({
                    message: error.details[0].message,

                })
            } else {
                const stu = await Strunet.create(value)
                return res.status(201).json({
                    message: "student created successfully",
                    data: stu   
                })
            }
        } catch (error) {
            console.log(error)
        }
    }










}
module.exports = new joiController();