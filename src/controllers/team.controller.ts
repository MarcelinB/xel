import { Controller, Get, Param } from '@nestjs/common';
import { Team } from 'src/entity/team.entity';
import { TeamService } from 'src/services/team.service';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  getAllTeams() {
    return this.teamService.findAll();
  }

  @Get(':id')
  getTeamById(@Param('id') id: number) {
    return this.teamService.findById(id);
  }

  @Get('league/:leagueId')
  async findByLeague(@Param('leagueId') leagueId: number) {
    return this.teamService.findByLeague(leagueId);
  }

  // Ajoutez les autres endpoints de votre choix pour la gestion des équipes
}
