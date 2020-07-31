import { Component, OnInit, Renderer } from '@angular/core';
import { SPEAKERS, PHOTOS } from './home.data';
import { NAVPAGES } from '../navbar/navigation.data';
import { shuffle } from 'src/app/utils/array.utils';
import { TALKS } from '../talks/talks.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  speakers = TALKS.sort(function(a, b){
    if(a.speaker.name < b.speaker.name) { return -1; }
    if(a.speaker.name > b.speaker.name) { return 1; }
    return 0;
  });

  photos = PHOTOS;

  pages = NAVPAGES;

  constructor() {
      document.body.classList.add('uk-light');
   }

  ngOnInit() {
  }

  hasRealAvatar(element, index, array) {
    return (element.speaker.avatar !== '../../../assets/img/speakers/');
 }

}
