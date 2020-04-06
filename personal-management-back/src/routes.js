const express = require('express');
const PeopleController = require('./controllers/PeopleController');
const ContactController = require('./controllers/ContactController');
const AddressController = require('./controllers/AddressController');
const ProfessionalExperienceController = require('./controllers/ProfessionalExperienceCoontroller');

const routes = express.Router();

// Rotas de Pessoa
routes.get('/people', PeopleController.index);
routes.post('/people', PeopleController.create);
routes.put('/people/:peopleParamsId', PeopleController.update);
routes.delete('/people/:peopleParamsId', PeopleController.delete);

// Rotas de contatos
routes.get('/contact', ContactController.index);
routes.post('/contact', ContactController.create);
routes.put('/contact/:contactId', ContactController.update);
routes.delete('/contact/:contactId', ContactController.delete);

// Rotas de Endereços
routes.get('/address', AddressController.index);
routes.post('/address', AddressController.create);
routes.put('/address/:addressId', AddressController.update);
routes.delete('/address/:addressId', AddressController.delete);

// Rotas de Experiências
routes.get('/experience', ProfessionalExperienceController.index);
routes.post('/experience', ProfessionalExperienceController.create);
routes.put('/experience/:experienceId', ProfessionalExperienceController.update);
routes.delete('/experience/:experienceId', ProfessionalExperienceController.delete);


module.exports = routes;