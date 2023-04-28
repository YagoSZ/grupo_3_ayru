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
        imagen_showcase2: {
            type: dataTypes.STRING
        },
        imagen_showcase3: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        disponibility_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        category_products_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        available_locations: {
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
        Product.belongsTo(models.AvailableLocation, {
            as : "AvailableLocation",
            foreignKey : "available_locations"
        })
        Product.belongsToMany(models.Color, {
            as : "colorsInProduct",
            through : "products_colors",
            foreignKey : "id_products",
            otherKey : "id_colors",
            timestamps: false
        })
        }


    return Product
}