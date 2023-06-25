import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private router: Router) { }


  login(user: User) {
    if (user.email === "egcastro96@gmail.com" && user.password === "180596") {
      localStorage.setItem('token', 'GDSFGFSDGHUWERGNEWGHERGVNDFNSGIDGVDF');
      this.router.navigate(['/scheduling']);
    } else {
      localStorage.clear();
      this.router.navigate(['']);
    }
  }
}
