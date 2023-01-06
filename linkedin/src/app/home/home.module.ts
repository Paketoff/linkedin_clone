import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { PopoverComponent } from './components/popover/popover.component';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { StartPostComponent } from './components/start-post/start-post.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HeaderComponent, 
    PopoverComponent, 
    ProfileSummaryComponent, 
    StartPostComponent, 
    AdvertisingComponent
  ],
  exports: [
    HeaderComponent, 
    PopoverComponent, 
    ProfileSummaryComponent, 
    StartPostComponent, 
    AdvertisingComponent
  ]
})
export class HomePageModule {}
