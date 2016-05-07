/**
 * Created by Pablo García on 06/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var Hotel = app.get('hotel');
            Hotel.create({
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                id_tipohotel: req.body.id_tipohotel
            }).then(function (hotel) {
                res.json(hotel)
                res.send({message: nombre+" ha sido agregado"});
            });
        },
        list:function (req, res) {
            var Hotel = app.get('hotel');
            Hotel.findAll().then(function (hotel) {
                res.json(hotel);
            });
        },
        edit:function (req, res) {
            var Hotel = app.get('hotel');
            Hotel.find(req,body.id_hotel).then(function (hotel) {
                if(hotel){
                    hotel.updateAttributes({
                        nombre: req.body.nombre,
                        direccion: req.body.direccion,
                        id_tipohotel: req.body.id_tipohotel
                    }).then(function (hotel) {
                        res.json(hotel);
                        res.send({message: nombre+" ha sido agregado"});
                    });
                }else {
                    res.status(404).send({ message: "Hotel no encontrado"});
                }
            });
        },
        delete:function (req, res) {
            var Hotel = app.get('hotel');
            Hotel.destroy({
                where: {
                    id_hotel: req.body.id_hotel
                }
            }).then(function (hotel) {
                res.json(hotel);
                res.send({message: id_hotel+" ha sido eliminado"});
            });
        },
        porid:function (req, res) {
            var Hotel = app.get('hotel');
            Hotel.find(req.body.id_hotel).then(function (hotel) {
                if(hotel) {
                    res.json(hotel);
                } else {
                    res.status(404).send({ message: "Hotel no encontrado"});
                }
            });
        }
    }

};