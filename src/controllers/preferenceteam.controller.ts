import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PreferenceTeam } from 'src/entity/preferenceteam.entity';
import { PreferenceTeamService } from 'src/services/preferenceteam.service';


@Controller('preference-teams')
export class PreferenceTeamController {
  constructor(private readonly preferenceTeamService: PreferenceTeamService) {}

  @Get()
  getAllPreferences(): Promise<PreferenceTeam[]> {
    return this.preferenceTeamService.findAll();
  }

  @Get(':id')
  getPreferenceById(@Param('id') id: number): Promise<PreferenceTeam> {
    return this.preferenceTeamService.findById(id);
  }

  @Post()
  createPreference(@Body() preferenceTeam: PreferenceTeam): Promise<PreferenceTeam> {
    return this.preferenceTeamService.create(preferenceTeam);
  }

  @Put(':id')
  updatePreference(@Param('id') id: number, @Body() preferenceTeam: PreferenceTeam): Promise<PreferenceTeam> {
    return this.preferenceTeamService.update(id, preferenceTeam);
  }

  @Delete(':id')
  deletePreference(@Param('id') id: number): Promise<void> {
    return this.preferenceTeamService.delete(id);
  }
}
