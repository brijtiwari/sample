import { Component, OnInit } from '@angular/core';
import { interval } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'demoApp';

  ngOnInit(): void {
  }

}
