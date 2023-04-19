module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        colors: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        disponibility_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        available_locations: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    }
}