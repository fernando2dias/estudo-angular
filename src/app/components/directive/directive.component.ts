import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
size = 40;
font = 'Arial';
color = 'red';
classes = ['green-title', 'smaill-title'];
underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }

}
