/**
 * Created by Pablo García on 06/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var Bitacora = app.get('bitacora');
            Bitacora.create({
                descripcion: req.body.descripcion
            }).then(function (bitacora) {
                res.json(bitacora);
                res.send({message: id_bitacora+" ha sido agregado"});
            });
        },
        list:function (req, res) {
            var Bitacora = app.get('bitacora');
            Bitacora.findAll().then(function (bitacora) {
                res.json(bitacora);
            });
        },
        edit:function (req, res) {
            var Bitacora = app.get('bitacora');
            Bitacora.find(req,body.id_bitacora).then(function (bitacora) {
                if(bitacora){
                    bitacora.updateAttributes({
                        descripcion: req.body.descripcion
                    }).then(function (bitacora) {
                        res.json(bitacora);
                        res.send({message: id_bitacora+" ha sido editado"});
                    });
                }else {
                    res.status(404).send({ message: "Informe no encontrado"});
                }
            });
        },
        delete:function (req, res) {
            var Bitacora = app.get('bitacora');
            Bitacora.destroy({
                where: {
                    id_bitacora: req.body.id_bitacora
                }
            }).then(function (bitacora) {
                res.json(bitacora);
                res.send({message: id_bitacora+" ha sido eliminado"});
            });
        },
        porid:function (req, res) {
            var Bitacora = app.get('bitacora');
            Bitacora.find(req.body.id_bitacora).then(function (bitacora) {
                if(bitacora) {
                    res.json(bitacora);
                } else {
                    res.status(404).send({ message: "Informe no encontrado"});
                }
            });
        }
    }
};
