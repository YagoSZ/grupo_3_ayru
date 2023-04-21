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

    return AvailableLocation
}
    