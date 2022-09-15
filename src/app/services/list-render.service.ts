import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListRenderService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    console.log("Ativando Service");
    return animals.filter((a) => animal.name !== a.name)
  }
}
