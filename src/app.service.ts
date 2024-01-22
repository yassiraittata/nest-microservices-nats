import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('USER_SERVICE') private userServer: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  handeTest() {
    this.userServer.send({ cmd: 'handle_test' }, { email: 'yassir@email.com' });
  }
}
