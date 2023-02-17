const db = require('../config/db.manager');

// get full customer listing
exports.getAllCustomers = function (req, res) {
    const customers = db.getCustomerList().then(results => {
        console.log(results);
        res.status(200).json({
            status: 'successful',
            data: results.recordsets[0]
        });
    });
}

// get a single customer by id
exports.getCustomerByID = function (req, res) {
    const {id} = req.params;
    const customer = db.getCustomerInfo(id).then(results => {
        console.log(results);
        res.status(200).json({
            status: 'successful',
            data: results.recordsets[0]
        });
    });
}

// create a new customer
exports.createNewCustomer = function (req, res) {
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'not implemented'
    });
}

// update a customer
exports.patchCustomerByID = function (req, res) {
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'not implemented'
    });
}

// delete a customer
exports.deleteCustomerByID = function (req, res) {
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'not implemented'
    });
}