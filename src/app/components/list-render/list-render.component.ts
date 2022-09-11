import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name: "Tyrion", type: "Dog"},
    {name: "Neco", type: "Cat"},
    {name: "Preta", type: "Cat"},
    {name: "Bob", type: "Horse"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
