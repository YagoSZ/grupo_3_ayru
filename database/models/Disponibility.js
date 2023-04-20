module.exports = (sequelize, dataTypes) => {
    let alias = 'Disponibility';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        },
        stock: {
            type: dataTypes.TEXT('tiny'),
            allowNull: false
        },
    }
    let config = {
        tableName: "disponibility", 
        timestamps: false
    }
    const Disponibility = sequelize.define(alias, cols, config)
}
    