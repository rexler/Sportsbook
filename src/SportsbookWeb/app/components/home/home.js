import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import couponLoader from '../../common/services/couponLoader.factory';

let homeModule = angular.module('home', [
  uiRouter,
  couponLoader
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
