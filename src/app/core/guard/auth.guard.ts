import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../services/users.service';



@Injectable({
  providedIn: 'root'
})
export class Auth implements CanActivate {

constructor(
  private usersService: UsersService,
  private router: Router) {}

  canActivate() {
    const token = localStorage.getItem('token');
    if (token != null) {
      return true  
    }  
    else{
      alert('Error')
      this.router.navigate([''])
      return false
    }
  
  }
    
}
