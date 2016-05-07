/**
 * Created by informatica on 06/05/2016.
 */
module.exports = function (app) {
    return{
        add:function (req, res) {
            var AdminSitioTuristico = app.get('adminsitioturistico');
            AdminSitioTuristico.create({
                id_usuario: req.body.id_usuario,
                id_sitioturistico: req.body.id_sitioturistico
            }).then(function (adminsitioturistico) {
                res.json(adminsitioturistico);
                res.send({message: id_adminsitioturistico+" ha sido agregado"});
            });
        },
        list:function (req, res) {
            var AdminSitioTuristico = app.get('adminsitioturistico');
            AdminSitioTuristico.findAll().then(function (adminsitioturistico) {
                res.json(adminsitioturistico);
            });
        },
        edit:function (req, res) {
            var AdminSitioTuristico = app.get('adminsitioturistico');
            AdminSitioTuristico.find(req,body.id_adminsitioturistico).then(function (adminsitioturistico) {
                if(adminsitioturistico){
                    adminsitioturistico.updateAttributes({
                        id_usuario: req.body.id_usuario,
                        id_sitioturistico: req.body.id_sitioturistico
                    }).then(function (adminsitioturistico) {
                        res.json(adminsitioturistico);
                        res.send({message: id_adminsitioturistico+" ha sido editado"});
                    });
                }else {
                    res.status(404).send({ message: "dato no encontrado"});
                }
            });
        },
        delete:function (req, res) {
            var AdminSitioTuristico = app.get('adminsitioturistico');
            AdminSitioTuristico.destroy({
                where: {
                    id_adminsitioturistico: req.body.id_adminsitioturistico
                }
            }).then(function (adminsitioturistico) {
                res.json(adminsitioturistico);
                res.send({message: id_adminsitioturistico+" ha sido eliminado"});
            });
        },
        porid:function (req, res) {
            var AdminSitioTuristico = app.get('adminsitioturistico');
            AdminSitioTuristico.find(req.body.id_adminsitioturistico).then(function (adminsitioturistico) {
                if(adminsitioturistico) {
                    res.json(adminsitioturistico);
                } else {
                    res.status(404).send({ message: "dato no encontrado"});
                }
            });
        }
    }
};