/**
 * Created by Pablo García on 06/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var Restaurante = app.get('restaurante');
            Restaurante.create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
            }).then(function (restaurante) {
                res.json(restaurante);
                res.send({message: nombre+" ha sido agregado"});
            });
        },
        list:function (req, res) {
            var Restaurante = app.get('restaurante');
            Restaurante.findAll().then(function (restaurante) {
                res.json(restaurante);
            });
        },
        edit:function (req, res) {
            var Restaurante = app.get('restaurante');
            Restaurante.find(req,body.id_restaurante).then(function (restaurante) {
                if(restaurante){
                    restaurante.updateAttributes({
                        nombre: req.body.nombre,
                        descripcion: req.body.descripcion,
                    }).then(function (restaurante) {
                        res.json(restaurante);
                        res.send({message: nombre+" ha sido editado"});
                    });
                }else {
                    res.status(404).send({ message: "Restaurante no encontrado"});
                }
            });
        },
        delete:function (req, res) {
            var Restaurante = app.get('restaurante');
            Restaurante.destroy({
                where: {
                    id_restaurante: req.body.id_restaurante
                }
            }).then(function (restaurante) {
                res.json(restaurante);
                res.send({message: id_restaurante+" ha sido eliminado"});
            });
        },
        porid:function (req, res) {
            var Restaurante = app.get('restaurante');
            Restaurante.find(req.body.id_restaurante).then(function (restaurante) {
                if(restaurante) {
                    res.json(restaurante);
                } else {
                    res.send({message: nombre+" ha sido agregado"});
                }
            });
        }
    }

};