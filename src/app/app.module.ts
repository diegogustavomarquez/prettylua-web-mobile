import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { MenuComponent } from './components/menu/menu.component';
import { FileTransfer } from '@awesome-cordova-plugins/file-transfer/ngx';
import { MenuPageModule } from './pages/menu/menu.module'; 



@NgModule({
  declarations: [AppComponent,MenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    MenuPageModule
  ],
  exports:[
    MenuComponent
  ],
  providers: [
    Geolocation,
    Camera,
    FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
