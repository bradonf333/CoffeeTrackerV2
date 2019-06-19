import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Coffee Tracker V2';
  welcomeMessage = `Welcome to ${this.title}`;
  bodyMessage = 'This is V2 of the original CoffeeTracker App with Unit Testing!';
  constructor() {}

  ngOnInit() {}
}
