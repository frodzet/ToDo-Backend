import { Module } from '@nestjs/common';
import { ToDoFactoryService } from './todo-factory.service';
import { ToDoServices } from './todo-services.service';
import { DataServicesModule } from '../../data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [ToDoServices, ToDoFactoryService],
  exports: [ToDoServices, ToDoFactoryService],
})
export class ToDoServicesModule {}
