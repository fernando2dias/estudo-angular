import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Fernando";
  age: number = 35;
  job: string = "Developer";
  hobbies = ["Jogar video-game", "Futebol", "Correr", "Assistir filmes"];

  constructor() { }

  ngOnInit(): void {
  }

}
