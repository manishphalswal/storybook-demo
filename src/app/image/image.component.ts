import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  //templateUrl: './image.component.html',
  template:`<img
  [ngStyle]="{'opacity': imageOpacity}"
  src="{{ imageSource }}"
  alt="{{ alternativeText }}"
  style="width: 100%;"
/>`,
  styleUrls: ['./image.component.scss']
})
export default class ImageComponent implements OnInit {

  @Input()
  imageSource: string = `/assets/red-fort.jpg`;

  @Input()
  imageCaption?: string = `The Red Fort is a historic fort in the city of Delhi in India that served as the main residence of the Mughal Emperors. 
  Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi`;

  @Input()
  alternativeText?: string = `The Image could not be loaded...`;

  @Input()
  imageOpacity?: number = 0.5;

  constructor() { }

  ngOnInit(): void {
  }

}
