const db = require('../database/models') // no es necesario agregar el archivo index.js ya que por defecto si se llama index es el que lee primero

module.exports = {
    list : (req,res) => {
        db.Movie.findAll()
            .then(movies => {
                return res.render('moviesList' , {
                    movies
                })
            })
            .catch( error => console.log(error))
    },
    detail : (req,res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                return res.render('moviesDetail' , {
                    movie
                })
            })
            .catch(error => console.log(error))
    }
}