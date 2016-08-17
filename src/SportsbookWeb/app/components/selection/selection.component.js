import template from './selection.html';
import controller from './selection.controller';
import './selection.scss';

let selectionComponent = {
  restrict: 'E',
  bindings: {
    selection: '='
  },
  template,
  controller
};

export default selectionComponent;
