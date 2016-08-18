class HomeController {
  constructor(CouponLoader) {
    "ngInject";
    this.name = 'home';
    this.couponLoader = CouponLoader;
  }

  getCoupons() {
    return this.couponLoader.getCoupons();
  }
}

export default HomeController;
