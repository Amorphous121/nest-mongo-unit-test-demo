import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TaskStatus } from './task.interface';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}

  async getTasks() {
    return await this.taskModel.find().lean();
  }

  async createTask(body: CreateTaskDto) {
    const taskPayload = { ...body, status: TaskStatus.IN_PROGRESS };
    const task = new this.taskModel(taskPayload);
    return (await task.save()).toObject();
  }
}
