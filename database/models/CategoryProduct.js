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
        tableName: "category_products", 
        timestamps: false
    }
    const CategoryProduct = sequelize.define(alias, cols, config)

    CategoryProduct.associate = function(models){
        CategoryProduct.hasMany(models.Product, {
            as : "Product",
            foreignKey : "categoryProducts_id"
        })
    }

    return CategoryProduct
}
    