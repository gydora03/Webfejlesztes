import { Component, OnInit } from '@angular/core';
import { GuessService } from '../guess.service';
import { Guess } from '../guess';
import { Observable,Subject } from "rxjs";
import { Router } from '@angular/router';

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-guess-list',
  templateUrl: './guess-list.component.html',
  styleUrls: ['./guess-list.component.css']
})
export class GuessListComponent implements OnInit {

 constructor(
   private guessservice: GuessService,
   private router: Router) { }

  guessesArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  guesses: Observable<Guess[]>;
  guess : Guess=new Guess();
  deleteMessage=false;
  guesslist:any;
  isupdated = false;


  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.guessservice.getGuessList().subscribe(data =>{
    this.guesses =data;
    this.dtTrigger.next();
    })
  }

  deleteGuess(id: number) {
    this.guessservice.deleteGuess(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.guessservice.getGuessList().subscribe(data =>{
            this.guesses =data
            })
        },
        error => console.log(error));
  }


  updateGuess(id: number){
    this.guessservice.getGuess(id)
      .subscribe(
        data => {
          this.guesslist=data
        },
        error => console.log(error));
  }

  guessupdateform=new FormGroup({
    guess_id:new FormControl(),
    guess_name:new FormControl(),
    guess_email:new FormControl(),
    guess_age:new FormControl()
  });

  updateGss(updgss){
    this.guess=new Guess();
   this.guess.guess_id=this.GuessId.value;
   this.guess.guess_name=this.GuessName.value;
   this.guess.guess_email=this.GuessEmail.value;
   this.guess.guess_age=this.GuessAge.value;
   console.log(this.GuessAge.value);


   this.guessservice.updateGuess(this.guess.guess_id,this.guess).subscribe(
    data => {
      this.isupdated=true;
      this.guessservice.getGuessList().subscribe(data =>{
        this.guesses =data
        })
    },
    error => console.log(error));
  }

  get GuessName(){
    return this.guessupdateform.get('guess_name');
  }

  get GuessEmail(){
    return this.guessupdateform.get('guess_email');
  }

  get GuessAge(){
    return this.guessupdateform.get('guess_age');
  }

  get GuessId(){
    return this.guessupdateform.get('guess_id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }

  toAddGuess() {
    this.router.navigate(['/add-guess']);
  }
}
