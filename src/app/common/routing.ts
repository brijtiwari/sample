
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

export class AppRoute {

    public static appRoutes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'about', component: AboutComponent }
    ]
}
