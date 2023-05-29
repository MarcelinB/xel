import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreferenceLeagueController } from 'src/controllers/preferenceleague.controller';
import { PreferenceLeague } from 'src/entity/preferenceleague.entity';
import { PreferenceLeagueService } from 'src/services/preferenceleague.service';


@Module({
  imports: [TypeOrmModule.forFeature([PreferenceLeague])],
  providers: [PreferenceLeagueService],
  controllers: [PreferenceLeagueController],
})
export class PreferenceLeagueModule {}
