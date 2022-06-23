module.exports = (sequelize , dataTypes) => {

    const alias = 'Actor'


    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },

        first_name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },

        last_name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },

        rating : {
            type : dataTypes.DECIMAL(3,1)
        },

        favorite_movie_id : {
            type : dataTypes.INTEGER.UNSIGNED
        }
    }


    const config = {
        tableName : 'actors',
        underscored : true,
        timestamps : true
    } 



    const Actor = sequelize.define(alias,cols,config)
    return Actor
}