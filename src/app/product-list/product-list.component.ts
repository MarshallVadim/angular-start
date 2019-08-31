import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  template: `<p>ФИО: {{name}}</p>
             <p>Возраст: {{age}}</p>
             <p>Телефон: {{phone}}</p>`
})
export class ProductListComponent {
  products = products;
  name = `Маршал Вадим Викторович`;
  age = 24;
  phone = `+380999999999`;

  share() {
    window.alert('The product has been shared!');
  }

onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/