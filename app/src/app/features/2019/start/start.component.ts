import { Component, OnInit } from '@angular/core';
import { shuffle } from 'src/app/utils/array.utils';
import { TALKS } from '../../talks/talks.data';
import { PHOTOS } from '../../home/home.data';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class Start2019Component implements OnInit {

  speakers = TALKS.sort(function(a, b){
    if(a.speaker.name < b.speaker.name) { return -1; }
    if(a.speaker.name > b.speaker.name) { return 1; }
    return 0;
  });

  photos = PHOTOS;

  
  talks = TALKS.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
  });

  tags = ['Developer stories',
  'multi-cloud',
  'event-driven applications',
  'UX',
  'programação funcional',
  'Bando de Dados',
  'NoSQL',
  'Empreendedorismo',
  'Liderança',
  'microservices',
  'Docker',
  'DevOps',
  'Laravel',
  'PHP',
  'MySQL',
  'Kubernetes',
  'Experiências Disruptivas',
  'UI',
  'Agile',
  'Data Science',
  'análise de dados',
  'Python',
  'Android',
  'iOS',
  'Xamarin',
  'TDD',
  'OSS',
  'experiência do usuário',
  'acessibilidade',
  'Front-end',
  'Cases'];

  constructor() {
    document.body.classList.add('uk-light');
   }

  ngOnInit() {
  }

  hasRealAvatar(element, index, array) {
    return (element.speaker.avatar !== '../../../assets/img/speakers/');
  }

}
