import angular from 'angular';
import Coupon from './coupon/coupon';
import Event from './event/event';
import Home from './home/home';

let componentModule = angular.module('app.components', [
  Coupon,
  Event,
  Home
])

.name;

export default componentModule;
