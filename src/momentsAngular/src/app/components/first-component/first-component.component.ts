import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Carol';
  age: number = 22;
  job = 'Developer';
  hobbies = ['jiu', 'natação', 'pilates']; //Array


  constructor() { }

  ngOnInit(): void {
  }

}
