import { Component, OnInit } from '@angular/core';

declare const bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  ngOnInit(){
    console.log(bootstrap.Tooltip.VERSION);
  }
}
