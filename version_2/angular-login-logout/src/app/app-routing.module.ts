import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent} from './logout/logout.component';
import {GuessListComponent} from './guess-list/guess-list.component';
import {AddGuessComponent} from './add-guess/add-guess.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'hello-world', component: GuessListComponent},
  {path: 'view-guess', component: GuessListComponent},
  // {path: 'view-guess/add-guess/view-guess', component: GuessListComponent},
  // {path: 'view-guess/add-guess', component: AddGuessComponent},
  {path: 'add-guess', component: AddGuessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
