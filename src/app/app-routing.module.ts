import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';
import { LoadingComponent } from './shared/loading/loading.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'register', component: RegisterComponent},
  { path:'scheduling', component: SchedulingComponent},
  { path: 'loading' , component: LoadingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
