/**
 * Created by Pablo García on 06/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var Mapa = app.get('mapa');
            Mapa.create({
                ubicacion: req.body.ubicacion
            }).then(function (mapa) {
                res.json(mapa);
                res.send({message: ubicacion+" ha sido agregado"});
            });
        },
        list:function (req, res) {
            var Mapa = app.get('mapa');
            Mapa.findAll().then(function (mapa) {
                res.json(mapa);
            });
        },
        edit:function (req, res) {
            var Mapa = app.get('mapa');
            Mapa.find(req,body.id_mapa).then(function (mapa) {
                if(mapa){
                    mapa.updateAttributes({
                        ubicacion: req.body.ubicacion
                    }).then(function (mapa) {
                        res.json(mapa);
                        res.send({message: ubicacion+" ha sido editado"});
                    });
                }else {
                    res.status(404).send({ message: "Mapa no encontrado"});
                }
            });
        },
        delete:function (req, res) {
            var Mapa = app.get('mapa');
            Mapa.destroy({
                where: {
                    id_mapa: req.body.id_mapa
                }
            }).then(function (mapa) {
                res.json(mapa);
                res.send({message: id_mapa+" ha sido eliminado"});
            });
        },
        porid:function (req, res) {
            var Mapa = app.get('mapa');
            Mapa.find(req.body.id_mapa).then(function (mapa) {
                if(mapa) {
                    res.json(mapa);
                } else {
                    res.status(404).send({ message: "Mapa no encontrado"});
                }
            });
        }
    }

};