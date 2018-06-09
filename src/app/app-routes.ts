import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/components/about/about.component';


const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  // {path: 'insurance', component: RightSideBarComponent},
  // {path: 'price-offers', component: RightSideBarComponent},
  // {path: 'personal', component: RightSideBarComponent},
  // {path: 'contact-us', component: RightSideBarComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: '**', component: AboutComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
