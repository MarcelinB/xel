import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreferenceTeamController } from 'src/controllers/preferenceteam.controller';
import { PreferenceTeam } from 'src/entity/preferenceteam.entity';
import { PreferenceTeamService } from 'src/services/preferenceteam.service';


@Module({
  imports: [TypeOrmModule.forFeature([PreferenceTeam])],
  providers: [PreferenceTeamService],
  controllers: [PreferenceTeamController],
})
export class PreferenceTeamModule {}
