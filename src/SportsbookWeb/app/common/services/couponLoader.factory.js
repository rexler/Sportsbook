import angular from 'angular';

let couponFactory = function () {
  const user = { name: 'alex' };

  let coupons = [
    {
      title: 'Premier League',
      subtitle: 'Outright',
      events: [
        {
          name: 'Arsenal vs Liverpool',
          selections: [
            { name: 'Home',
              price: '4/1'
            },
            {
              name: 'Draw',
              price: 'EVS'
            },
            {
              name: 'Away',
              price: '5/2'
            }
          ]
        },
        {
          name: 'Man Utd vs Chelsea',
          selections: [
            { name: 'Home',
              price: '2/1'
            },
            {
              name: 'Draw',
              price: '4/1'
            },
            {
              name: 'Away',
              price: '2/5'
            }
          ]
        }
      ]},
    {
      title: 'Championship',
      subtitle: 'Outright',
      events: [
        {
          name: 'Newcastle vs Bristol City',
          selections: [
            { name: 'Home',
              price: '4/1'
            },
            {
              name: 'Draw',
              price: 'EVS'
            },
            {
              name: 'Away',
              price: '5/2'
            }
          ]
        },
        {
          name: 'Brighton vs Nottingham Forest',
          selections: [
            { name: 'Home',
              price: '4/1'
            },
            {
              name: 'Draw',
              price: 'EVS'
            },
            {
              name: 'Away',
              price: '5/2'
            }
          ]
        },
        {
          name: 'Sheffield Wednesday vs Norwich',
          selections: [
            { name: 'Home',
              price: '4/1'
            },
            {
              name: 'Draw',
              price: 'EVS'
            },
            {
              name: 'Away',
              price: '5/2'
            }
          ]
        }
      ]
    }
  ];
  let getCoupons = () => {
    return coupons;
  };
  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  return { getUser, isSignedIn, getCoupons };
};

let couponLoader = angular.module('coupon.factory', [])

  .factory('CouponLoader', couponFactory)

  .name;

export default couponLoader;
