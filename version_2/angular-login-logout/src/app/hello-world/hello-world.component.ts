import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { GuessService } from '../guess.service';
import { Guess } from '../guess';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message: string;

  constructor(private helloWorldService: GuessService) { }

  ngOnInit() {

    console.log("HelloWorldComponent");
    this.helloWorldService.getGuessList().subscribe( (result) => {
      this.message = result.content;
    });
  }

}
