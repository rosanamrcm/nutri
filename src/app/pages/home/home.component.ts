import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/interfaces/user';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  public user: User = {
    email: "",
    password: ""
  }
  

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    
  } 
  
  getLogin() {
    this.usersService.login(this.user);
    console.log(this.user)
  }
  
}



