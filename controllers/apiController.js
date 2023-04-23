const db = require('../database/models');
const sequelize = db.sequelize;
const { json } = require('sequelize');

module.exports = {
    listUsers : (req, res) => {
        db.User.findAll()
        .then(users => {
            return res.status(200).json({
                count: users.length,
                url: "api/users",
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
                    db.User.findOne({
                        where: { id: id }
                    }),
                    db.User.findAll()
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