import { Component, OnInit } from '@angular/core';
import { GuessService } from '../guess.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Guess } from '../guess';
@Component({
  selector: 'app-add-guess',
  templateUrl: './add-guess.component.html',
  styleUrls: ['./add-guess.component.css']
})
export class AddGuessComponent implements OnInit {

  constructor(private guessservice:GuessService) { }

  guess: Guess = new Guess();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  guesssaveform=new FormGroup({
    guess_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    guess_email:new FormControl('',[Validators.required,Validators.email]),
    guess_age:new FormControl()
  });

  saveGuess(saveGuess){
    this.guess=new Guess();
    this.guess.guess_name=this.GuessName.value;
    this.guess.guess_email=this.GuessEmail.value;
    this.guess.guess_age=this.GuessAge.value;
    this.submitted = true;
    this.save();
  }


  save() {
    this.guessservice.createGuess(this.guess)
      .subscribe(data => console.log(data), error => console.log(error));
    this.guess = new Guess();
  }

  get GuessName(){
    return this.guesssaveform.get('guess_name');
  }

  get GuessEmail(){
    return this.guesssaveform.get('guess_email');
  }

  get GuessAge(){
    return this.guesssaveform.get('guess_age');
  }

  addGuessForm(){
    this.submitted=false;
    this.guesssaveform.reset();
  }
}
