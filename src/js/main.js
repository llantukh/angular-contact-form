import angular from 'angular';

import { ContactController } from './Controllers/contacts';

angular
  .module('app', [])
  .controller('ContactController', ContactController);
