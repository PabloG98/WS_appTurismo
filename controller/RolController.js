/**
 * Created by Pablo García on 06/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var Rol = app.get('rol');
            Rol.create({
                rol: req.body.rol
            }).then(function (rol) {
               res.json(rol)
                res.send({message: rol+" ha sido agregado"});
            });
        },
        list:function (req, res) {
            var Rol = app.get('rol');
            Rol.findAll().then(function (rol) {
               res.json(rol);
            });
        },
        edit:function (req, res) {
            var Rol = app.get('rol');
            Rol.find(req,body.id_rol).then(function (rol) {
                if(rol){
                    rol.updateAttributes({
                        rol: req.body.rol
                    }).then(function (rol) {
                        res.json(rol);
                        res.send({message: rol+" ha sido agregado"});
                    });
                }else {
                    res.status(404).send({ message: "Rol no encontrado"});
                }
            });
        },
        delete:function (req, res) {
            var Rol = app.get('rol');
            Rol.destroy({
                where: {
                    id_rol: req.body.id_rol
                }
            }).then(function (rol) {
                res.json(rol);
                res.send({message: id_rol+" ha sido eliminado"});
            });
        },
        porid:function (req, res) {
            var Rol = app.get('rol');
            Rol.find(req.body.id_rol).then(function (rol) {
                if(rol) {
                    res.json(rol);
                } else {
                    res.status(404).send({ message: "Rol no encontrado"});
                }
            });
        }
    }
    
};
