import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pure-inbox-screen',
  templateUrl: './pure-inbox-screen.component.html',
  styleUrls: ['./pure-inbox-screen.component.scss']
})
export class PureInboxScreenComponent implements OnInit {

  @Input() error: any;

  constructor() {}

  ngOnInit() {}

}
