import { Controller, Get, Param } from '@nestjs/common';
import { League } from 'src/entity/league.entity';
import { LeagueService } from 'src/services/league.service';

@Controller('leagues')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Get()
  async findAll(): Promise<League[]> {
    return this.leagueService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<League> {
    return this.leagueService.findById(id);
  }

  @Get('game/:gameId')
  getLeaguesByGame(@Param('gameId') gameId: number) {
    return this.leagueService.getLeaguesByGame(gameId);
  }
}
