import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
} from '@nestjs/websockets';
import { FakeDataSocketService } from './fake-data-socket.service';
import { Server, Socket } from 'socket.io';
import { Cron } from '@nestjs/schedule';

@WebSocketGateway({
  cors: true,
})
export class FakeDataSocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(private readonly fakeDataSocketService: FakeDataSocketService) {}

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  // Cron que se ejecuta cada 2 segundos
  @Cron('*/2 * * * * *') // */2 significa cada 2 segundos
  emitDataEveryTwoSeconds() {
    const fakeData = this.fakeDataSocketService.create();

    this.server.emit('newData', {
      msg: 'New data every 2 seconds',
      content: fakeData,
    });

    console.log('Data emitted every 2 seconds:', fakeData);
  }
  @Cron('*/5 * * * * *')
  emitDataEveryTenSeconds() {
    const fakeData = this.fakeDataSocketService.create2();

    this.server.emit('newData2', {
      msg: 'New data every 2 seconds',
      content: fakeData,
    });

    console.log('Data emitted every 2 seconds:', fakeData);
  }

  @SubscribeMessage('newData')
  get() {
    return { message: 'Request for data received' };
  }
}
