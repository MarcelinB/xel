import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreferenceGameService } from '../services/preferencegame.service';
import { PreferenceGameController } from '../controllers/preferencegame.controller';
import { PreferenceGame } from 'src/entity/preferencegame.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PreferenceGame])],
  providers: [PreferenceGameService],
  controllers: [PreferenceGameController],
})
export class PreferenceGameModule {}
