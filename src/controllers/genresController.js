const {Op} = require('sequelize') // desestructuro los operadores de sequelize "Op"
const db = require('../database/models') // no es necesario agregar el archivo index.js ya que por defecto si se llama index es el que lee primero

module.exports = {

    list : (req,res) => {
        db.Genre.findAll()
            .then(genres => res.render('genresList' , {
                genres
            }))
            .catch(error => console.log(error))
    },

    detail : (req,res) => {
        db.Genre.findByPk(req.params.id)
        .then(genre => res.render('genresDetail' , {
            genre
        }))
        .catch(error => console.log(error))
    }
}