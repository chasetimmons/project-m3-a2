const sql = require('mssql');
const dbConnection = require('./db.config');

console.log(dbConnection);

// get all sales products
async function getSalesProducts() {
    console.log('Connecting to SQL...Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The database connection was successful');

    console.log('Getting data...');
    let results = await dbContext.request()
                        .query(`
                        SELECT TOP(20)
                            ProductID,
                            Name,
                            ProductNumber, 
                            Color,
                            ListPrice
                        FROM
                            SalesLT.Product
                            `);
    console.log(`Returned SQL results`);
    return results;
}

// get a single sales product by id
async function getSalesProduct(id) {
    console.log('Connecting to SQL...Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The database connection was successful');

    console.log('Getting data...');
    let results = await dbContext.request()
                        .query(`
                        SELECT
                            ProductID,
                            Name,
                            ProductNumber, 
                            Color,
                            ListPrice
                        FROM
                            SalesLT.Product
                        WHERE
                            ProductID= ` + id + `
                            `);
    console.log(`Returned SQL results`);
    return results;
}

// get full customer listing
async function getCustomerList() {
    console.log('Connecting to SQL...Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The database connection was successful');

    console.log('Getting data...');
    let results = await dbContext.request()
                        .query(`
                        SELECT
                            Customer.CustomerID,
                            Customer.FirstName,
                            Customer.MiddleName,
                            Customer.LastName,
                            Customer.EmailAddress, 
                            Customer.Phone,
                            CustomerAddress.AddressType
                        FROM
                            SalesLT.Customer
                        INNER JOIN 
                            SalesLT.CustomerAddress 
                        ON
                            Customer.CustomerID=CustomerAddress.CustomerID
                            `);
    console.log(`Returned SQL results`);
    return results;
}

// get a single customer by id
async function getCustomerInfo(id) {
    console.log('Connecting to SQL...Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The database connection was successful');

    console.log('Getting data...');
    let results = await dbContext.request()
                        .query(`
                        SELECT
                            Customer.CustomerID,
                            Customer.FirstName,
                            Customer.MiddleName,
                            Customer.LastName,
                            Customer.EmailAddress, 
                            Customer.Phone,
                            CustomerAddress.AddressType
                        FROM
                            SalesLT.Customer
                        
                        INNER JOIN 
                            SalesLT.CustomerAddress 
                        ON
                            Customer.CustomerID=CustomerAddress.CustomerID
                        WHERE
                            Customer.CustomerID= ` + id + `
                            `);
    console.log(`Returned SQL results`);
    return results;
}

module.exports = {
    getSalesProducts: getSalesProducts,
    getSalesProduct: getSalesProduct,
    getCustomerList: getCustomerList,
    getCustomerInfo: getCustomerInfo
};