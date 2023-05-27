import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamController } from 'src/controllers/team.controller';
import { Team } from 'src/entity/team.entity';
import { TeamService } from 'src/services/team.service';


@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
