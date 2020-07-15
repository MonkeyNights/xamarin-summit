import { Component, OnInit } from '@angular/core';
import { PHOTOS } from '../../home/home.data';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  photos = PHOTOS;

  constructor() { }

  ngOnInit() {
  }

}
