module.exports = (sequelize, dataTypes) => {

    const alias = 'Movie'

    const cols = { 
        id : { // restricciones
            type : dataTypes.INTEGER.UNSIGNED, // INT en sql/ entero y sin signo
            autoIncrement : true, // autoincrementable?
            allowNull : false,  // permite nulo?
            primaryKey : true  // tiene primary key?
        },
        title : {
            type : dataTypes.STRING(500), // en workbench: VARCHAR(500)
            allowNull : false,  // permite nulo?
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false,
        },
        awards : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 0
        },
        release_date : {
            type : dataTypes.DATE,
            allowNull : false,
        },
        length : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
        },
        genre_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : true,
        },
    }


    const config = {
        tableName : 'movies',
        timestamps : true, 
        underscored : true // es para el "_" de la tabla de base de datos, en el "model" se escribe como camelcase: SELECT `id`, `title`, `rating`, `awards`, `release_date`, `length`, `genre_id`, `created_at` AS `createdAt`, `updated_at` AS `updatedAt` FROM `movies` AS `Movie
    }


    const Movie = sequelize.define(alias,cols,config)

    return Movie

}
