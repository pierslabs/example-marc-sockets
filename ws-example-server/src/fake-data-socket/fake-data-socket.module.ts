import { Module } from '@nestjs/common';
import { FakeDataSocketService } from './fake-data-socket.service';
import { FakeDataSocketGateway } from './fake-data-socket.gateway';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [FakeDataSocketGateway, FakeDataSocketService],
})
export class FakeDataSocketModule {}
