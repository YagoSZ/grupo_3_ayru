module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        color: {
            type: dataTypes.TEXT
        },
    }
}
    