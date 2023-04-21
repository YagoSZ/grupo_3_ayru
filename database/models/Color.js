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

    return Color
}
    