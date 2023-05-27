import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/entity/game.entity';
import { FindOneOptions, Repository } from 'typeorm';


@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  async findById(id: number): Promise<Game> {
    const options: FindOneOptions<Game> = {
      where: { id }, // Utilisez l'id comme condition de recherche
    };
    return this.gameRepository.findOne(options);
  }

  async create(game: Game): Promise<Game> {
    return this.gameRepository.save(game);
  }

  async update(id: number, game: Game): Promise<Game> {
    await this.gameRepository.update(id, game);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.gameRepository.delete(id);
  }
}
