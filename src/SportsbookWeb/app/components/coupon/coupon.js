import angular from 'angular';
import uiRouter from 'angular-ui-router';
import couponComponent from './coupon.component';
//import couponService from './coupon.factory';

let couponModule = angular.module('coupon', [
  uiRouter
])

.component('coupon', couponComponent)

.name;

export default couponModule;
