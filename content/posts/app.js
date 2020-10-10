   static createUser = async (req, res) => {
    try {
        const userDetails = await UserModel.create({
            name: req.body.name,
            address: req.body.address,
            mobile_number: req.body.mobile_number,
        });
        res.status(200).send({
            status: 200,
            message: 'Data Save Successfully',
            data: userDetails
        });
    }
    catch (error) {
        return res.status(400).send({
            message: 'Unable to insert data',
            errors: error,
            status: 400
        });
    }
}