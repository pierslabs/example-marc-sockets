import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { FakeDataSocketModule } from './fake-data-socket/fake-data-socket.module';

@Module({
  imports: [HealthModule, FakeDataSocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
