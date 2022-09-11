import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  show : boolean = false;

  showMessage() : void {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
