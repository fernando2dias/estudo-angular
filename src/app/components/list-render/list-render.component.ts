import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListRenderService } from 'src/app/services/list-render.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  animals : Animal[] = [];

  animalDetail = "";
  constructor(private listService: ListRenderService) {
    this.getAnimals();
   }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetail = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
    console.log('Removendo animal');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
   this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
