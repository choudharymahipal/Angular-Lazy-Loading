import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css'],
})
export class ToysComponent implements OnInit {
  constructor() {
    console.log('reached in Home/Product/Toys');
  }

  ngOnInit(): void {}
}
