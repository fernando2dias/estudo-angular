import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';

import { ListRenderService } from 'src/app/services/list-render.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal

  constructor(private listRenderService: ListRenderService, private route: ActivatedRoute) {
    this.getAnimal();
   }

  ngOnInit(): void {
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listRenderService.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}
