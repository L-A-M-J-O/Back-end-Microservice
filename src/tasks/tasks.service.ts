import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./tasks.entity";
import { v4 } from "uuid";

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      title: "Alan",
      description: "New tarea",
      status: TaskStatus.DONE
    }
  ];
  getAllTask() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PEDING
    };
    this.tasks.push();

    return task;
  }
  updateTask() { }
  deleteTask() { }
}
