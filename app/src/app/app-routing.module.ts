import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CodeOfConductComponent } from './features/code-of-conduct/code-of-conduct.component';
import { SpeakersComponent } from './features/speakers/speakers.component';
import { TalksComponent } from './features/talks/talks.component';
import { AgendaComponent } from './features/agenda/agenda.component';
import { FaqComponent } from './features/faq/faq.component';
import { LodgingComponent } from './features/lodging/lodging.component';
import { StartComponent } from './features/2020/start/start.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  /*{ path: 'home', component: HomeComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent },
  { path: 'lodging', component: LodgingComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'talks', component: TalksComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'faq', component: FaqComponent }, */
  { path: '**', redirectTo: '/start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
