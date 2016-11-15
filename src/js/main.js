import angular from 'angular';

import { ContactController } from './controllers/contacts';

angular
  .module('app', [])
  .controller('ContactController', ContactController);
