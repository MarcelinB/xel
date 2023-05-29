import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PreferenceGameService } from '../services/preferencegame.service';
import { PreferenceGame } from 'src/entity/preferencegame.entity';

@Controller('preferencegames')
export class PreferenceGameController {
  constructor(private readonly preferenceGameService: PreferenceGameService) {}

  @Get()
  async findAll(): Promise<PreferenceGame[]> {
    return this.preferenceGameService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<PreferenceGame> {
    return this.preferenceGameService.findById(id);
  }

  @Post()
  async create(@Body() preferenceGame: PreferenceGame): Promise<PreferenceGame> {
    return this.preferenceGameService.create(preferenceGame);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() preferenceGame: PreferenceGame,
  ): Promise<PreferenceGame> {
    return this.preferenceGameService.update(id, preferenceGame);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.preferenceGameService.delete(id);
  }
}
