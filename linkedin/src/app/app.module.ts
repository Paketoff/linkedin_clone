import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './home/components/header/header.component';
import { PopoverComponent } from './home/components/popover/popover.component';
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomePageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
