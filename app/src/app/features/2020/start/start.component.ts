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
  speakers = []
  sessions = []
  schedule = []

  constructor() {

  }

  ngOnInit() {
    this.loadSpeakers(TALKS20);
    this.loadSessions(TALKS20);
    this.loadSchedule(TALKS20);
  }

  loadSchedule(source: any) {
    source.forEach(day => {
      if (day.date) {
        this.schedule.push(day);
      }
    });
  }

  loadSessions(source: any) {
    source.forEach(day => {
      day.sessions.forEach(session => {
        this.sessions.push(session);
      });
    });
  }

  loadSpeakers(source: any) {
    source.forEach(day => {
      day.sessions.forEach(session => {
        this.speakers.push(session.speaker);
      });
    });
  }

}
