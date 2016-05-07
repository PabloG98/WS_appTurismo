/**
 * Created by Pablo García on 06/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var TipoHotel = app.get('tipohotel');
            TipoHotel.create({
                tipohotel: req.body.tipohotel
            }).then(function (tipohotel) {
                res.json(tipohotel)
                res.send({message: "Hotel "+tipohotel+" ha sido agregado"});
            });
        },
        list:function (req, res) {
            var TipoHotel = app.get('tipohotel');
            TipoHotel.findAll().then(function (tipohotel) {
                res.json(tipohotel);
            });
        },
        delete:function (req, res) {
            var TipoHotel = app.get('tipohotel');
            TipoHotel.destroy({
                where: {
                    id_tipohotel: req.body.id_tipohotel
                }
            }).then(function (tipohotel) {
                res.json(tipohotel);
                res.send({message: "Hotel "+id_tipohotel+" ha sido eliminado"});
            });
        },
        porid:function (req, res) {
            var TipoHotel = app.get('tipohotel');
            TipoHotel.find(req.body.id_tipohotel).then(function (tipohotel) {
                if(tipohotel) {
                    res.json(tipohotel);
                } else {
                    res.status(404).send({ message: "Tipo de Hotel no encontrado"});
                }
            });
        }

    }

};