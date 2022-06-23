module.exports = (sequelize, dataTypes) => {

    const alias = 'Genre'

    const cols = { 
        id : { // restricciones
            type : dataTypes.INTEGER.UNSIGNED, // INT en sql/ entero y sin signo
            autoIncrement : true, // autoincrementable?
            allowNull : false,  // permite nulo?
            primaryKey : true  // tiene primary key?
        },
        name : {
            type : dataTypes.STRING(100), // en workbench: VARCHAR(500)
            allowNull : false,  // permite nulo?
           
        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true
        },
        active : {
            type : dataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : 1
        },
        
    }


    const config = {
        tableName : 'genres',
    }


    const Genre = sequelize.define(alias,cols,config)

    return Genre

}
