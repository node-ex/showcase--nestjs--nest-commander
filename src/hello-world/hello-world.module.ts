import { HelloWorldCommand } from '@/hello-world/hello-world.command';
import { HelloWorldController } from '@/hello-world/hello-world.controller';
import { HelloWorldService } from '@/hello-world/hello-world.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [HelloWorldController],
  providers: [HelloWorldService, HelloWorldCommand],
})
export class HelloWorldModule {}
