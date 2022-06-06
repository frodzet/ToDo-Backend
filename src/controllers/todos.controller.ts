import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ToDo, ToDoDto } from '../core';
import { ToDoServices } from '../services/use-cases/todo/todo-services.service';

@Controller('api/toDos')
export class ToDosController {
  constructor(private readonly toDosService: ToDoServices) {}

  @Post()
  async create(@Body() toDoDto: ToDoDto): Promise<ToDo> {
    return this.toDosService.create(toDoDto);
  }

  @Get()
  async findAll(): Promise<ToDo[]> {
    return this.toDosService.findAll();
  }

  @Get(':toDoId')
  async findOne(@Param('toDoId') toDoId: string): Promise<ToDo> {
    return this.toDosService.findOne(toDoId);
  }

  @Put(':toDoId')
  async update(
    @Param('toDoId') toDoId: string,
    @Body() toDoDto: ToDoDto,
  ): Promise<ToDo> {
    return this.toDosService.update(toDoId, toDoDto);
  }

  @Delete(':toDoId')
  async remove(@Param('toDoId') toDoId: string): Promise<ToDo> {
    return this.toDosService.remove(toDoId);
  }
}
