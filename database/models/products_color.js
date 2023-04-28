module.exports = (sequelize, dataTypes) => {
    let alias = 'products_colors';
    let config = {
        tableName: "products_colors", 
        timestamps: false
    }
    const products_colors = sequelize.define(alias, {}, config)



    return products_colors
}
    