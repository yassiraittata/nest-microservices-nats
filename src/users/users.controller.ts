import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller()
export class UsersController {
  constructor(private prisma: PrismaService) {}

  @MessagePattern({ cmd: 'create-user' })
  async createUser(@Payload() payload: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: {
        email: 'email@email.com',
        password: '123456',
        username: 'username',
      },
    });

    return user;
  }

  @EventPattern('payment-created')
  createdPayment(@Payload() data: any) {
    console.log('data from the users ', data);
  }
}
