import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TasksService } from './tasks.service';
import { Task } from './task.schema';

describe('Task Service', () => {
  let service: TasksService;

  class FakeTaskModel {
    _id = '63b8667dec26fe33cd2ae295';
    title = 'Nest Js';
    description = 'A Backend Javascript Framework.';
    status = 'IN_PROGRESS';

    constructor(data: Partial<FakeTaskModel>) {
      if (data) {
        return this;
      }
    }

    toObject() {
      return this;
    }

    static find() {
      return { lean: jest.fn().mockResolvedValue([this]) };
    }

    save = jest.fn().mockResolvedValue(this);
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getModelToken(Task.name),
          useValue: FakeTaskModel,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('Should Create service', () => {
    expect(service).toBeDefined();
  });

  it('should return list of records', async () => {
    const taskList = await service.getTasks();
    expect(taskList).toBeDefined();
    expect(taskList).toHaveLength(1);
  });

  it('should Create new task', async () => {
    const task = {
      title: 'Nest Js',
      description: 'A Backend Javascript Framework.',
    };

    const createdTask = await service.createTask(task);
    expect(createdTask).toBeDefined();
    expect(createdTask).toHaveProperty('_id', '63b8667dec26fe33cd2ae295');
  });
});
