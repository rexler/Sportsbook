class HomeController {
  constructor(CouponLoader, $http) {
    "ngInject";
    this.name = 'home';
    this.couponLoader = CouponLoader;
  //}

  //getCoupons() {
      //return this.couponLoader.getCoupons();
      this.coupons = this.couponLoader.getCoupons();

      $http.get('http://localhost:59605/api/coupons').then((resp) => {
          console.log(resp);
          this.coupons = resp.data !== undefined ? resp.data : this.coupons;
      },
      function(err) {
          console.log(err);
      });
  }
}

export default HomeController;
