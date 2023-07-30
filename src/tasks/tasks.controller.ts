import { Controller, Get, Post, Body } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTask();
  }
  @Post()
  createAllTasks(@Body() newTask: any) {
    console.log(newTask);
    return "Guardado";
  }
}
