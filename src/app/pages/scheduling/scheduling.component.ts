import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchedulService } from 'src/app/core/services/schedul.service';
import { AppoimentHistory } from 'src/app/interfaces/appoimentHistory';
import { Scheduled } from 'src/app/interfaces/scheduled';



@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.sass']
})
export class SchedulingComponent implements OnInit {

  listScheduled: Scheduled[];

  listAppoimentHistory: AppoimentHistory[];

  constructor(private schedulService: SchedulService, private router: Router) { }

  ngOnInit(): void {
    this.getScheduled();
    this.getAppoimentHistory();
  }
  

  getScheduled() {
    this.schedulService.scheduled().subscribe({
      next: (data) => {
        this.listScheduled = data;
        console.log('listScheduled' ,this.listScheduled);
      },
      error: (error) => console.log('error')
    })
  }

    getAppoimentHistory() {
      this.schedulService.appoimentHistory().subscribe({
        next: (data) => {
          this.listAppoimentHistory = data;
          console.log('listAppoimentHistory' ,this. listAppoimentHistory);
        },
        error: (error) => console.log('error')
      })
    }

    logout(){
      localStorage.clear();
      this.router.navigate(['']);
    }
  
}
