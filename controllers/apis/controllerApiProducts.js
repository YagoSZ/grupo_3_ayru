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
            console.log(req.params.id)
            let id = req.params.id;
            
            Promise.all([
              Product.findOne({
                
                include :  [{ association : "CategoryProduct" }, { association : "colorsInProduct" }],
                
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
        },

        'CategoryList': (req, res) => {
        //     Product.findAll({
        //         attributes: [],
        //         include :  [{ association : "CategoryProduct" }, { association : "colorsInProduct" }],
        //         group: ["category_products_id"]            include: {
            //   model: db.CategoryProduct,
            //   attributes: ['name'],
            // },
        // }) 

        Product.findAll({
            attributes: ['category_products_id', 'CategoryProduct.name', [sequelize.fn('count', sequelize.col('*')), 'count']],
            include :  [{ association : "CategoryProduct" }],
            group: ['category_products_id']
          })
            .then(products => {
                console.log(products)
                const response = {
                    meta: {
                        count : products.length,
                        status : 200,
                        url : '/api/category'
                    },
                    data: products
                }
                    res.json(response);
                })
                .catch(error => res.send(error));
            },

}

module.exports = controllerApiProducts;


