import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // @Input() temps: TemplateRef<any>[];
  public items: string[] = ['a','b','c'];
  constructor() { }

  ngOnInit(): void {
  }

}
