import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css'],
})
export class Home2Component implements OnInit {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
