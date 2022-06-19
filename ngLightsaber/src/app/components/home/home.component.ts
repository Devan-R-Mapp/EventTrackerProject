import { Lightsaber } from './../../models/lightsaber';
import { Component, OnInit } from '@angular/core';
import { LightsaberService } from 'src/app/service/lightsaber.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  lightsabers: Lightsaber[] = [];
  newLightsaber: Lightsaber = new Lightsaber();
  selected: Lightsaber = new Lightsaber();
  selectedNeat: Lightsaber = new Lightsaber(1, '', '', 0, '', false, 0, 0);
  update: boolean = false;
  create: boolean = false;
  full: boolean = false;

  constructor(private lightsaberSvc: LightsaberService) {}

  ngOnInit(): void {
    this.hardReload();
  }

  reloadChooser(full: boolean) {
    if (full) {
      this.neatReload();
    } else {
      this.hardReload();
    }
  }
  reload() {
    this.lightsaberSvc.index().subscribe({
      next: (ls) => {
        this.lightsabers = ls;
      },
      error: (boom) => {
        console.error('error in reload' + boom);
      },
    });
  }
  neatReload() {
    this.lightsaberSvc.index().subscribe({
      next: (ls) => {
        this.selected = this.selectedNeat;
        this.lightsabers = ls;
        this.full = true;
      },
      error: (boom) => {
        console.error('error in reload' + boom);
      },
    });
  }

  hardReload() {
    this.lightsaberSvc.index().subscribe({
      next: (ls) => {
        this.lightsabers = ls;
        this.selected = new Lightsaber();
      },
      error: (boom) => {
        console.error('error in reload' + boom);
      },
    });
  }

  showLightsaber(ls: Lightsaber): void {
    this.lightsaberSvc.show(ls.id).subscribe({
      next: (result) => {
        this.lightsabers = [];
        this.newLightsaber = new Lightsaber();
        this.lightsabers.push(ls);
        this.selected = ls;
      },
      error: (nojoy) => {
        console.error(
          'HomeListHttpComponent.addLightsaber(): error creating lightsaber:'
        );
        console.error(nojoy);
      },
    });
  }

  addLightsaber(ls: Lightsaber): void {
    this.lightsaberSvc.create(ls).subscribe({
      next: (result) => {
        this.hardReload;
        window.alert(ls.owner + ' had a lightsaber created!');
        this.create = false;
        this.lightsabers.push(ls);
      },
      error: (nojoy) => {
        console.error(
          'HomeListHttpComponent.addLightsaber(): error creating lightsaber:'
        );
        console.error(nojoy);
      },
    });
  }

  updateLightsaber(id: number | null, ls: Lightsaber): void {
    ls.destroyed = false;

    this.lightsaberSvc.update(id, ls).subscribe({
      next: (result) => {
        this.newLightsaber = new Lightsaber();
        this.reload();
        this.update = false;
        this.selected = new Lightsaber();
      },
      error: (nojoy) => {
        console.error(
          'HomeListHttpComponent.updateLightsaber(): error updating lightsaber:'
        );
        console.error(nojoy);
      },
    });
  }

  updatePage(ls: Lightsaber): void {
    this.update = true;
    this.selected = ls;
    this.reload();
  }

  deleteLightsaber(ls: Lightsaber): void {
    if (ls.id) {
      let name = ls.owner;
      this.lightsaberSvc.destroy(ls.id).subscribe({
        next: (result) => {
          this.hardReload();
          window.alert(name + "'s lightsaber was deleted");
          name = null;
        },
        error: (nojoy) => {
          console.error(
            'HomeListHttpComponent.deleteLightsaber(): error deleteing lightsaber:'
          );
          console.error(nojoy);
          this.hardReload();
        },
      });
    }
  }
}
