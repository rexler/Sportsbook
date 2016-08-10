import BetslipModule from './betslip'
import BetslipController from './betslip.controller';
import BetslipComponent from './betslip.component';
import BetslipTemplate from './betslip.html';

describe('Betslip', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BetslipModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BetslipController();
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
      expect(BetslipTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BetslipComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BetslipTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BetslipController);
      });
  });
});
