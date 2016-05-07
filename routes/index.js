/**
 * Created by Pablo García on 05/05/2016.
 */
var ruta=require('express').Router();
module.exports = (function(app) {
    var rol=require('../controller/RolController.js')(app);
    var usuario=require('../controller/UsuarioController.js')(app);
    var tipohotel=require('../controller/TipoHotelController.js')(app);
    var hotel=require('../controller/HotelController.js')(app);
    var restaurante=require('../controller/RestauranteController.js')(app);
    var mapa=require('../controller/MapaController.js')(app);
    var bitacora=require('../controller/BitacoraController.js')(app);
    var alerta=require('../controller/AlertaController.js')(app);
    var sitioturistico=require('../controller/SitioTuristicoController.js')(app);
    var adminsitioturistico=require('../controller/AdminSitioTuristicoController.js')(app);

    ruta.get('/',function (peticion, respuesta) {
        respuesta.send("Servicio iniciado");
    });

    /*
     Rutas para Rol
     */
    ruta.get('/rol', rol.list);
    ruta.post('/rol', rol.add);
    ruta.put('/rol', rol.edit);
    ruta.delete('/rol', rol.delete);
    ruta.get('/rol/:id', rol.porid);

    /*
     Rutas para Usuario
     */
    ruta.get('/usuario', usuario.list);
    ruta.post('/usuario', usuario.add);
    ruta.put('/usuario', usuario.edit);
    ruta.delete('/usuario', usuario.delete);
    ruta.get('/usuario/:id', usuario.porid);

    /*
     Rutas para TipoHotel
     */
    ruta.get('/tipohotel', tipohotel.list);
    ruta.post('/tipohotel', tipohotel.add);
    ruta.delete('/tipohotel', tipohotel.delete);
    ruta.get('/tipohotel/:id', tipohotel.porid);

    /*
     Rutas para Hotel
     */
    ruta.get('/hotel', hotel.list);
    ruta.post('/hotel', hotel.add);
    ruta.put('/hotel', hotel.edit);
    ruta.delete('/hotel', hotel.delete);
    ruta.get('/hotel/:id', hotel.porid);

    /*
    Rutas para Restaurante
    */
    ruta.get('/restaurante', restaurante.list);
    ruta.post('/restaurante', restaurante.add);
    ruta.put('/restaurante', restaurante.edit);
    ruta.delete('/restaurante', restaurante.delete);
    ruta.get('/restaurante/:id', restaurante.porid);

    /*
     Rutas para Mapa
     */
    ruta.get('/mapa', mapa.list);
    ruta.post('/mapa', mapa.add);
    ruta.put('/mapa', mapa.edit);
    ruta.delete('/mapa', mapa.delete);
    ruta.get('/mapa/:id', mapa.porid);

    /*
     Rutas para Bitacora
     */
    ruta.get('/bitacora', bitacora.list);
    ruta.post('/bitacora', bitacora.add);
    ruta.put('/bitacora', bitacora.edit);
    ruta.delete('/bitacora', bitacora.delete);
    ruta.get('/bitacora/:id', bitacora.porid);

    /*
     Rutas para Alerta
     */
    ruta.get('/alerta', alerta.list);
    ruta.post('/alerta', alerta.add);
    ruta.put('/alerta', alerta.edit);
    ruta.delete('/alerta', alerta.delete);
    ruta.get('/alerta/:id', alerta.porid);

    /*
     Rutas para SitioTuristico
     */
    ruta.get('/sitioturistico', sitioturistico.list);
    ruta.post('/sitioturistico', sitioturistico.add);
    ruta.put('/sitioturistico', sitioturistico.edit);
    ruta.delete('/sitioturistico', sitioturistico.delete);
    ruta.get('/sitioturistico/:id', sitioturistico.porid);

    /*
     Rutas para AdminSitioTuristico
     */
    ruta.get('/adminsitioturistico', adminsitioturistico.list);
    ruta.post('/adminsitioturistico', adminsitioturistico.add);
    ruta.put('/adminsitioturistico', adminsitioturistico.edit);
    ruta.delete('/adminsitioturistico', adminsitioturistico.delete);
    ruta.get('/adminsitioturistico/:id', adminsitioturistico.porid);

    return ruta;
});

