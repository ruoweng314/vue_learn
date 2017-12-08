//定义APPModule   这个根模块告诉angular如何组装该应用。目前申明了APPComponent，后期会申明更多组件
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppComponentHeader } from './app.component.header';


@NgModule({
  declarations: [
    AppComponent,
    AppComponentHeader
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,AppComponentHeader]
})
export class AppModule { }
