const db = require('../config/db.manager');

// get all sales products
exports.getAllSales = function (req, res) {
    const salesProducts = db.getSalesProducts().then(results => {
        console.log(results);
        res.status(200).json({
            status: 'successful',
            data: results.recordsets[0]
        });
    });
}

// get a single sales product by id
exports.getSalesByID = function (req, res) {
    const {id} = req.params;
    const salesProduct = db.getSalesProduct(id).then(results => {
        console.log(results);
        res.status(200).json({
            status: 'successful',
            data: results.recordsets[0]
        });
    });
}

// create a new sale/product?
exports.createNewSales = function (req, res) {
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'not implemented'
    });
}

// update a sale/product?
exports.patchSalesByID = function (req, res) {
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'not implemented'
    });
}

// delete a sale/product?
exports.deleteSalesByID = function (req, res) {
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'not implemented'
    });
}