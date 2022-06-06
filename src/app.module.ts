import { Module } from '@nestjs/common';
import { DataServicesModule } from './services/data-services/data-services.module';
import { ToDoServicesModule } from './services/use-cases/todo/todo-sevices.module';
import { ToDosController } from './controllers/todos.controller';

@Module({
  imports: [DataServicesModule, ToDoServicesModule],
  controllers: [ToDosController],
})
export class AppModule {}
