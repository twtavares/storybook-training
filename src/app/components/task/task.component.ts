import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  title: string;
  @Input() task: Task;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onPin(id: any) {
    this.onPinTask.emit(id);
  }
  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
