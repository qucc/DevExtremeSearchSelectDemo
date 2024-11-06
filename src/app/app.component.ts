import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import ArrayStore from 'devextreme/data/array_store';
import { Product, Service } from './app.service';
import { DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  simpleProducts: string[];

  products: Product[];

  data: ArrayStore;
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService ) {
    var service = new Service();
    this.products = service.getProducts();
    this.simpleProducts = service.getSimpleProducts();
    this.data = new ArrayStore({
      data: this.products,
      key: 'ID',
    });
   }

   onValueChanged({ value }: DxSelectBoxTypes.ValueChangedEvent) {
    notify(`The value is changed to: "${value}"`);
  }
  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
