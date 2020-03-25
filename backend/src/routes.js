const express = require ('express');

const OngController = require ('./controller/OngController');
const IncidentsController = require ('./controller/IncidentsController');
const ProfileController = require ('./controller/ProfileController');
const SessionController = require ('./controller/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);
routes.post('/incidents', IncidentsController.store);




module.exports = routes;