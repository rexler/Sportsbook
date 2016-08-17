import SelectionModule from './selection'
import SelectionController from './selection.controller';
import SelectionComponent from './selection.component';
import SelectionTemplate from './selection.html';

describe('Selection', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SelectionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SelectionController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(SelectionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SelectionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SelectionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SelectionController);
      });
  });
});
