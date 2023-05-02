const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;

const User = db.User;

const controllerApiUsers = {
    listUsers : (req, res) => {
        User.findAll({
            include :  [{ association : "Category"}]
        })
        .then(users => {
            return res.status(200).json({
                count: users.length,
                url: "/api/users",
                data: users,
                status: 200
                })
        })
        // Otra manera:
            // db.User.findAll()
            // .then(users => {
            //     let response = {
            //         meta: {
            //             count: users.length,
            //             url: 'api/users',
            //             status : 200,
            //         },
            //         data: users
            //     }
            //         res.json(response);
            //     })
        },
        detailUsers : (req, res) => {
            let id = req.params.id;
               Promise.all([
                    User.findOne({
                        where: { id: id }
                    }),
                    db.Category.findAll()
                ])
                .then(user => {
                    let response = {
                        meta: {
                            count: user.length,
                            url: '/api/user/:id',
                            status: 200,
                        },
                        data: user
                    }
                    res.json(response);
                });
        }
}

module.exports = controllerApiUsers;