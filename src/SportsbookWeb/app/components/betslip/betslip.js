import angular from 'angular';
import uiRouter from 'angular-ui-router';
import betslipComponent from './betslip.component';

let betslipModule = angular.module('betslip', [
  uiRouter
])

.component('betslip', betslipComponent)

.name;

export default betslipModule;
