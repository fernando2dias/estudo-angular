import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  animals : Animal[] = [
    {name: "Tyrion", type: "Dog", age: 4},
    {name: "Neco", type: "Cat", age: 5},
    {name: "Preta", type: "Cat", age: 5},
    {name: "Bob", type: "Horse", age: 10}
  ];

  animalDetail = "";
  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetail = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

}
