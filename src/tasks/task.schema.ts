import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ITask, TaskStatus } from './task.interface';

export type TaskDocument = HydratedDocument<ITask>;

@Schema({ versionKey: false })
export class Task {
  @Prop({ type: 'String', required: true })
  title: string;

  @Prop({ type: 'String', required: true })
  description: string;

  @Prop({ type: 'String', required: true })
  status: TaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
