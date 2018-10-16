import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todolist:object[];
  // name:string;

  constructor() { }

  ngOnInit() {
    this.todolist = [
      {name: "todo1", status: true}, 
      {name: "task2", status: false}, 
    ];
    // this.name = "rew";
  }

  addMethod(el) {
    this.todolist.unshift({name: el, status: true});
    // document.querySelector("#name").value="";
    this.name="";
  }

  deleteMethod(element) {
    this.todolist = this.todolist.filter(el => {
      console.log(element);
      console.log(el.name);
      el.name === element})
  }

  toggleTasks(el) {
    console.log(el);
  }

}
