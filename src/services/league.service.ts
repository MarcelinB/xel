import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { League } from 'src/entity/league.entity';
import { FindOneOptions, Repository } from 'typeorm';


@Injectable()
export class LeagueService {
  constructor(
    @InjectRepository(League)
    private readonly leagueRepository: Repository<League>,
  ) {}

  async findAll(): Promise<League[]> {
    return this.leagueRepository.find();
  }

  async findById(id: number): Promise<League> {
    const option: FindOneOptions<League> = {
         where: { id } };
    return this.leagueRepository.findOne(option);
  }

  async getLeaguesByGame(gameId: number): Promise<League[]> {
    return this.leagueRepository
      .createQueryBuilder('league')
      .where('league.id_game = :gameId', { gameId })
      .getMany();
  }
}
