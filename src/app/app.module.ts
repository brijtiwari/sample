import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoute } from '../app/common/routing';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { EmailService } from './service/emailService/emailService';
import { FormsModule } from '@angular/forms'
import{SlideshowModule} from 'ng-simple-slideshow' 
import {MatCardModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ServiceHeighlightComponent } from './service-heighlight/service-heighlight.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    ProductSearchComponent,
    ServiceHeighlightComponent
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    RouterModule.forRoot(AppRoute.appRoutes),
    FormsModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
