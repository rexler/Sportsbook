import CouponModule from './coupon'
import CouponController from './coupon.controller';
import CouponComponent from './coupon.component';
import CouponTemplate from './coupon.html';

describe('Coupon', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CouponModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CouponController();
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
      let component = CouponComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CouponTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CouponController);
      });
  });
});
