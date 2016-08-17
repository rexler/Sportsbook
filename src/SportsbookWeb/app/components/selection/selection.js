import angular from 'angular';
import uiRouter from 'angular-ui-router';
import selectionComponent from './selection.component';

let selectionModule = angular.module('selection', [
  uiRouter
])

.component('selection', selectionComponent)

.name;

export default selectionModule;
