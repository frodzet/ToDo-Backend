import { IsBoolean, IsString } from "class-validator";

export class ToDo {
  @IsString()
  title: string;

  @IsBoolean()
  isDone: boolean;
}