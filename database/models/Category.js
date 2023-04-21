module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
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
        tableName: "category", 
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config)

    Category.associate = function(models){
        Category.hasMany(models.User, {
            as : "User",
            foreignKey : "category_id"
        })
    }

    return Category
}
    