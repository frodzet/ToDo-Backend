import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../core';
import { MongoGenericRepository } from './mongo-generic-repository.services';
import { ToDo, ToDoDocument } from './schemas';

@Injectable()
export class MongoDataServices
  implements OnApplicationBootstrap, IDataServices
{
  toDos: MongoGenericRepository<ToDo>;

  constructor(
    @InjectModel(ToDo.name)
    private ToDoRepository: Model<ToDoDocument>,
  ) {
    // this.subjectDocumentModel.db.db
    //   .dropDatabase()
    //   .then((r) => console.log('database dropped'));
    // DB-Collection Size Test
  }

  onApplicationBootstrap() {
    this.toDos = new MongoGenericRepository<ToDo>(this.ToDoRepository);
  }
}
