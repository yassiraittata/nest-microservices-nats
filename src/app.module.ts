import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NatsModule } from './nats/nats.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [NatsModule,UsersModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
