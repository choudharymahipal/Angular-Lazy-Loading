import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css'],
})
export class ComputerComponent implements OnInit {
  constructor() {
    console.log('reached in Home/Product/Electronics/Computer');
  }

  ngOnInit(): void {}
}
