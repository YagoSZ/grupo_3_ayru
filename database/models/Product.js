module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
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
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        colors: {
            type: dataTypes.STRING,
            allowNull: false
        },
        disponibility_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        categoryProducts_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        availableLocations: {
            type: dataTypes.TEXT,
            allowNull: false
        },
    }
    let config = {
        tableName: "products", 
        timestamps: false, 
        underscored: true
    }
    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.belongsTo(models.CategoryProduct, {
            as : "CategoryProduct",
            foreignKey : "categoryProducts_id"
        })
        Product.belongsTo(models.Disponibility, {
            as : "Disponibility",
            foreignKey : "disponibility_id"
        })
        // Product.belongsToMany(models.Color, {
            // as : "Color",
            // through : "products_colors",
            // foreignKey : "id_products",
            // otherKey : "id_colors"
        // })
        // Product.belongsToMany(models.availableLocation, {
            // as : "AvailableLocation",
            // through : "products_available_locations",
            // foreignKey : "id_products",
            // otherKey : "id_availableLocations"
        // })
        }


    return Product
}