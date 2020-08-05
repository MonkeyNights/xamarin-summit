import { Component, OnInit } from '@angular/core';
import { PHOTOS } from '../../home/home.data';
import { TALKS20 } from './speaker.data';
import { TALKS } from '../../talks/talks.data';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  photos = PHOTOS;
  speakers = TALKS20.sort(function(a, b){
    if(a.speaker.name < b.speaker.name) { return -1; }
    if(a.speaker.name > b.speaker.name) { return 1; }
    return 0;
  });

  talks = TALKS20.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
  });


  constructor() { }

  ngOnInit() {
  }

}
