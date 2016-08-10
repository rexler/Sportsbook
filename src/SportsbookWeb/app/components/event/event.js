import angular from 'angular';
import uiRouter from 'angular-ui-router';
import eventComponent from './event.component';

let eventModule = angular.module('event', [
  uiRouter
])

.component('event', eventComponent)

.name;

export default eventModule;
