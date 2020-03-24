import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  value: number = 15;
  options: Options = {
    floor: 0,
    ceil: 20
  };
  value2: number = 10;
  options2: Options = {
    floor: 0,
    ceil: 20
  };
  value3: number = 6;
  options3: Options = {
    floor: 0,
    ceil: 20
  };

  constructor() { }

  ngOnInit(): void {
  }

}
