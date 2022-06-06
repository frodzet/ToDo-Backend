import { Injectable } from '@nestjs/common';
import { IDataServices, ToDo, ToDoDto } from '../../../core';
import { ToDoFactoryService } from './todo-factory.service';

@Injectable()
export class ToDoServices {
  constructor(
    private dataServices: IDataServices,
    private toDoFactoryService: ToDoFactoryService,
  ) {}

  async create(toDoDto: ToDoDto): Promise<ToDo> {
    const toDo = this.toDoFactoryService.createNewToDo(toDoDto);

    return await this.dataServices.toDos.create(toDo);
  }

  async findAll(): Promise<ToDo[]> {
    const toDos = await this.dataServices.toDos.findAll();

    return toDos;
  }

  async findOne(toDoId: string): Promise<ToDo> {
    const toDo = await this.dataServices.toDos.findOne(toDoId);

    return toDo;
  }

  async update(toDoId: string, toDoDto: ToDoDto): Promise<ToDo> {
    const toDo = this.toDoFactoryService.updateToDo(toDoDto);

    return await this.dataServices.toDos.update(toDoId, toDo);
  }

  async remove(toDoId: string) {
    const removedToDo = await this.dataServices.toDos.delete(toDoId);

    return removedToDo;
  }
}
