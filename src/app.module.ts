import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/next'),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
