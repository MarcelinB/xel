import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeagueController } from 'src/controllers/league.controller';
import { Game } from 'src/entity/game.entity';
import { League } from 'src/entity/league.entity';
import { LeagueService } from 'src/services/league.service';

@Module({
  imports: [TypeOrmModule.forFeature([League, Game])],
  controllers: [LeagueController],
  providers: [LeagueService],
})
export class LeagueModule {}
