import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
})
export class KidsComponent implements OnInit {
  constructor() {
    console.log('reached in Home/Product/Toys/Kids');
  }

  ngOnInit(): void {}
}
