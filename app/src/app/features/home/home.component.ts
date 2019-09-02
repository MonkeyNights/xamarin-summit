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

  pages = NAVPAGES;
  speakers = shuffle(TALKS.filter(this.hasRealAvatar));
  photos = PHOTOS;

  constructor() {
      document.body.classList.add('uk-light');
   }

  ngOnInit() {

  }

  hasRealAvatar(element, index, array) {
    return (element.speaker.avatar !== '../../../assets/img/speakers/');
 }

}
