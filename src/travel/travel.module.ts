import { Module } from '@nestjs/common';
import { TravelService } from './travel.service';
import { TravelController } from './travel.controller';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}
