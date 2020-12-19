import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuessListComponent } from './guess-list/guess-list.component';
import { AddGuessComponent } from './add-guess/add-guess.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-guess', pathMatch: 'full' },
  { path: 'view-guess', component: GuessListComponent },
  { path: 'add-guess', component: AddGuessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
