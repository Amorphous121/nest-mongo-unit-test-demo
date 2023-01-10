import { TaskStatus } from '../task.interface';
import { CreateTaskDto } from './create-task.dto';

export class TaskDto extends CreateTaskDto {
  _id: string;
  status: TaskStatus;
}
