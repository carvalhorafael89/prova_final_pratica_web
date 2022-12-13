import { TodoServiceService } from './../../todo-service.service';
import { Component, OnInit } from '@angular/core';
import { TodoInterface } from 'src/Todo-interface';


@Component({
  selector: 'app-show-data-table',
  templateUrl: './show-data-table.component.html',
  styleUrls: ['./show-data-table.component.css']
})
export class ShowDataTableComponent implements OnInit {

  listatodo: TodoInterface[] = [];

  constructor(private TodoService: TodoServiceService ) { }

  getTodoList(): void {
    this.TodoService.getTodo().subscribe(todo => this.listatodo = todo);
  }

  ngOnInit(): void {
    this.getTodoList();
  }
}
