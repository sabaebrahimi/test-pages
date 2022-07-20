import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild("dive") mamad: ElementRef;
  @ViewChild("id1") asghar: ElementRef;
  attributes = 'color: red;';
  tagId = 'id1';
  constructor() {
    
  }
  ngOnInit(): void {
    
  }
  clicky() {
    this.mamad.nativeElement.setAttribute('style', 'color: red');
    this.asghar.nativeElement.setAttribute('style', 'color: blue');
  }
}
