import { PersonalComponent } from './components/personal/personal.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'about', component: AboutComponent },
  { path: 'personal', component: PersonalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
