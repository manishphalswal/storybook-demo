import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export default class TextfieldComponent implements OnInit {

  @Input()
  textValue?: string = `Enter Name`;

  @Input()
  textBGColor?: string = `aqua`;

  constructor() { }

  ngOnInit(): void {
  }

}
