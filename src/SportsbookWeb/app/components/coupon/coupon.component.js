import template from './coupon.html';
import controller from './coupon.controller';
import './coupon.scss';

let couponComponent = {
  restrict: 'E',
  bindings: {
    coupon: '='
  },
  template,
  controller
};

export default couponComponent;
