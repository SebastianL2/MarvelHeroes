import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';


export const routes: Routes = [
    {path:'home',component:AppComponent},
    {path:'comics/:id', component:ComicsComponent},
];
