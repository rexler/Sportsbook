import template from './event.html';
import controller from './event.controller';
import './event.scss';

let eventComponent = {
  restrict: 'E',
  bindings: {
    event: '='
  },
  template,
  controller
};

export default eventComponent;
