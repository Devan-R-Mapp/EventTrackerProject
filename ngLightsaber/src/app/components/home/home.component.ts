import { Lightsaber } from './../../models/lightsaber';
import { Component, OnInit } from '@angular/core';
import { LightsaberService } from 'src/app/service/lightsaber.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lightsabers: Lightsaber[] = [];

  constructor(
    private lightsaberSvc: LightsaberService
  ) { }

  ngOnInit(): void {
    this.reload();
  }

reload() {
  this.lightsaberSvc.index().subscribe({
    next: (ls)=>{
      this.lightsabers = ls;
    },
    error :(boom => {
      console.error('error in reload' + boom)
    })
  })
}

}
