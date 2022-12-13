import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/todo-service.service';
import { TodoInterface } from 'src/Todo-interface';
@Component({
  selector: 'app-show-data-table',
  templateUrl: './show-data-table.component.html',
  styleUrls: ['./show-data-table.component.css']
})
export class ShowDataTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
