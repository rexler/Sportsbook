import EventModule from './event'
import EventController from './event.controller';
import EventComponent from './event.component';
import EventTemplate from './event.html';

describe('Event', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EventModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EventController();
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

  describe('Component', () => {
      // component/directive specs
      let component = EventComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EventTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EventController);
      });
  });
});
