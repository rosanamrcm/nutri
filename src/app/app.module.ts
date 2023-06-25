import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './core/services/users.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoadingComponent,
    SchedulingComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService],

  bootstrap: [AppComponent]
})
export class AppModule { }
