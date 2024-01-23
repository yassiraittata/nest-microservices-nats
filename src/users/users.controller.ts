import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto';

@Controller()
export class UsersController {
  @MessagePattern({ cmd: 'create-user' })
  createUser(@Payload() payload: CreateUserDto) {
    return 'from the micro... ' + payload.email;
  }
}
