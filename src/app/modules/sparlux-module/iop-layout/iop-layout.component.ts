import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iop-layout',
  templateUrl: './iop-layout.component.html',
  styleUrls: ['./iop-layout.component.scss']
})
export class IopLayoutComponent implements OnInit {
  routes = [{ name: 'home', path: '/home' }
    , { name: 'cart', path: '/cart' }
    , { name: 'billing', path: '/billing' }
    , { name: 'wish-list', path: '/wish-list' }
    , { name: 'my-orders', path: '/my-orders' }
    , { name: 'my-profile', path: '/my-profile' }
    , { name: 'pdp', path: '/pdp' }
    , { name: 'plp', path: '/plp' }
    , { name: 'thank-you', path: '/thank-you' }
    , { name: 'tracking', path: '/tracking' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
