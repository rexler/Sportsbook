import angular from 'angular';
import Coupon from './coupon/coupon';
import Event from './event/event';
import Selection from './selection/selection';
import Home from './home/home';

let componentModule = angular.module('app.components', [
  Coupon,
  Event,
  Selection,
  Home
])

.name;

export default componentModule;
