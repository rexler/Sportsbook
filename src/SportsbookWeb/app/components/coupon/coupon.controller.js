class CouponController {
  constructor() {
    //"ngInject";

    //console.log(CouponService.getUser().name);
    //this.couponService = CouponService;
    this.name = 'coupon';

    //this.username = User.getUser().name;
  }

  getCoupon(coupon) {
    return JSON.parse(coupon);
  }
  getUser() {
    //return this.couponService.getUser().name;
  }
}

export default CouponController;
