import { ToDo, ToDoDto } from '../../../core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ToDoFactoryService {
  createNewToDo(toDoDto: ToDoDto) {
    const newToDo = new ToDo();
    newToDo.title = toDoDto.title;
    newToDo.isDone = toDoDto.isDone;

    return newToDo;
  }

  updateToDo(toDoDto: ToDoDto) {
    const newToDo = new ToDo();
    newToDo.title = toDoDto.title;
    newToDo.isDone = toDoDto.isDone;

    return newToDo;
  }
}
