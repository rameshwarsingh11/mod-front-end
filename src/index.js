import angular from 'angular';
import {ngAnimate} from 'angular-animate';
import {ngSanitize} from 'angular-sanitize';
import 'angular-ui-bootstrap';

import 'angular-ui-router';
import routesConfig from './routes';

import {hello} from './app/hello';
import {mod01} from './mod01/app';
import {mod02} from './mod02/app';
import {appService} from './mod01/service';
import {appDirective} from './mod01/heightdirective';
import './index.scss';

export const app = 'app';


angular
  .module(app, ['ngAnimate', 'ngSanitize','ui.router', 'ui.bootstrap'])
  .config(routesConfig)
  .service('appService', ['$http', appService])
   .directive('appDirective', appDirective)
  .component('app', hello)
  .component('mod01', mod01)
  .component('mod02', mod02);
  
  
  
