import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
})
export class LaptopComponent implements OnInit {
  constructor() {
    console.log('reached in Home/Product/Electronics/Laptop');
  }

  ngOnInit(): void {}
}
