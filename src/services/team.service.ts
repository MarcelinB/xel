import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from 'src/entity/team.entity';
import { FindOneOptions, Repository } from 'typeorm';


@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  async findById(id: number): Promise<Team> {
    const option: FindOneOptions<Team> = {
            where: { id } };
    return this.teamRepository.findOne(option);
  }

  async findByLeague(leagueId: number): Promise<Team[]> {
    return this.teamRepository 
      .createQueryBuilder('team')
      .where('team.id_league = :leagueId', { leagueId })
      .getMany();
  }

  // Ajoutez les autres méthodes de votre choix pour la gestion des équipes
}
