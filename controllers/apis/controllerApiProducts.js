const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;

const Product = db.Product;

const controllerApiProducts = {

    'productsList': (req, res) => {
        Product.findAll({
            include :  [{ association : "CategoryProduct" }, { association : "colorsInProduct" }]
    }) 
        .then(products => {
            console.log(products)
            const response = {
                meta: {
                    count : products.length,
                    status : 200,
                    url : '/api/products'
                },
                data: products
            }
                res.json(response);
            })
            .catch(error => res.send(error));
        },

        'detail': (req, res) => {
            let id = req.params.id;
            
            Promise.all([
              Product.findOne({
                where: { id: id }
              }),
              db.Color.findAll(),
              db.CategoryProduct.findAll(),
              db.Disponibility.findAll(),
              db.AvailableLocation.findAll()
            ])
                .then(product => {
                    let response = {
                        meta: {
                            count: product.length,
                            status: 200,
                            url: '/api/products/:id'
                        },
                        data: product
                    }
                    res.json(response);
                });
        }

}

module.exports = controllerApiProducts;


