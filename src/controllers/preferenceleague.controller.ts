import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PreferenceLeague } from 'src/entity/preferenceleague.entity';
import { PreferenceLeagueService } from 'src/services/preferenceleague.service';


@Controller('preference-leagues')
export class PreferenceLeagueController {
  constructor(private readonly preferenceLeagueService: PreferenceLeagueService) {}

  @Get()
  getAllPreferences(): Promise<PreferenceLeague[]> {
    return this.preferenceLeagueService.findAll();
  }

  @Get(':id')
  getPreferenceById(@Param('id') id: number): Promise<PreferenceLeague> {
    return this.preferenceLeagueService.findById(id);
  }

  @Post()
  createPreference(@Body() preferenceLeague: PreferenceLeague): Promise<PreferenceLeague> {
    return this.preferenceLeagueService.create(preferenceLeague);
  }

  @Put(':id')
  updatePreference(@Param('id') id: number, @Body() preferenceLeague: PreferenceLeague): Promise<PreferenceLeague> {
    return this.preferenceLeagueService.update(id, preferenceLeague);
  }

  @Delete(':id')
  deletePreference(@Param('id') id: number): Promise<void> {
    return this.preferenceLeagueService.delete(id);
  }
}
