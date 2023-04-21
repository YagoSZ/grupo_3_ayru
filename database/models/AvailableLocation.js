module.exports = (sequelize, dataTypes) => {
    let alias = 'AvailableLocation';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        location: {
            type: dataTypes.STRING,
            allowNull: false
        },
    }
    let config = {
        tableName: "availablelocations", 
        timestamps: false
    }
    const AvailableLocation = sequelize.define(alias, cols, config)

    AvailableLocation.associate = function(models){
        AvailableLocation.belongsToMany(models.Product, {
            as : "Product",
            through : "products_available_locations",
            foreignKey : "id_availableLocations",
            otherKey : "id_products"
        })
    }

    return AvailableLocation
}
    