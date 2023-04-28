module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        color: {
            type: dataTypes.STRING,
            allowNull: false
        },
    }
    let config = {
        tableName: "colors", 
        timestamps: false
    }
    const Color = sequelize.define(alias, cols, config)

    Color.associate = function(models){
        Color.belongsToMany(models.Product, {
            as : "productsInColor",
            through : "products_colors",
            foreignKey : "id_colors",
            otherKey : "id_products",
            timestamps: false

        })
    }

    return Color
}
    