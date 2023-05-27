import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Game } from 'src/entity/game.entity';
import { GameService } from 'src/services/game.service';

@Controller('games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Game> {
    return this.gameService.findById(id);
  }

  @Post()
  create(@Body() game: Game): Promise<Game> {
    return this.gameService.create(game);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() game: Game): Promise<Game> {
    return this.gameService.update(id, game);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.gameService.delete(id);
  }
}
