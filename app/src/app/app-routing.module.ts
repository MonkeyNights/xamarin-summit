import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './features/2020/start/start.component';
import { Start2019Component } from './features/2019/start/start.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: '2019/start', component: Start2019Component },
  { path: '2019', redirectTo: '2019/start' },
  { path: '2020', redirectTo: '2020/start' },
  { path: '**', redirectTo: '/start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
