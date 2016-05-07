/**
 * Created by Pablo García on 06/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var Alerta = app.get('alerta');
            Alerta.create({
                descripcion: req.body.descripcion,
                id_bitacora: req.body.id_bitacora
            }).then(function (alerta) {
                res.json(alerta);
                res.send({message: id_alerta +" ha sido agregado"});
            });
        },
        list:function (req, res) {
            var Alerta = app.get('alerta');
            Alerta.findAll().then(function (alerta) {
                res.json(alerta);
            });
        },
        edit:function (req, res) {
            var Alerta = app.get('alerta');
            Alerta.find(req,body.id_alerta).then(function (alerta) {
                if(alerta){
                    alerta.updateAttributes({
                        descripcion: req.body.descripcion,
                        id_bitacora: req.body.id_bitacora
                    }).then(function (alerta) {
                        res.json(alerta);
                        res.send({message: id_alerta+" ha sido editado"});
                    });
                }else {
                    res.status(404).send({ message: "Alerta no encontrada"});
                }
            });
        },
        delete:function (req, res) {
            var Alerta = app.get('alerta');
            Alerta.destroy({
                where: {
                    id_alerta: req.body.id_alerta
                }
            }).then(function (alerta) {
                res.json(alerta);
                res.send({message: id_alerta+" ha sido eliminado"});
            });
        },
        porid:function (req, res) {
            var Alerta = app.get('alerta');
            Alerta.find(req.body.id_alerta).then(function (alerta) {
                if(alerta) {
                    res.json(alerta);
                } else {
                    res.status(404).send({ message: "Alerta no encontrada"});
                }
            });
        }
    }
};
