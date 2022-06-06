import { IGenericRepository } from './generic-repository.abstracts';
import { ToDo } from '../entities';

export abstract class IDataServices {
  abstract toDos: IGenericRepository<ToDo>;
}
