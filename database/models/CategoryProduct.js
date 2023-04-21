module.exports = (sequelize, dataTypes) => {
    let alias = 'CategoryProduct';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
    }
    let config = {
        tableName: "categoryproducts", 
        timestamps: false
    }
    const CategoryProduct = sequelize.define(alias, cols, config)

    return CategoryProduct
}
    