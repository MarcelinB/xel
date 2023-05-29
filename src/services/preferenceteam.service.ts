import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PreferenceTeam } from 'src/entity/preferenceteam.entity';
import { FindOneOptions, Repository } from 'typeorm';


@Injectable()
export class PreferenceTeamService {
  constructor(
    @InjectRepository(PreferenceTeam)
    private readonly preferenceTeamRepository: Repository<PreferenceTeam>,
  ) {}

  findAll(): Promise<PreferenceTeam[]> {
    return this.preferenceTeamRepository.find();
  }

  findById(id: number): Promise<PreferenceTeam> {
    const option: FindOneOptions<PreferenceTeam> = {
        where: { id },
    };
    return this.preferenceTeamRepository.findOne(option);
  }

  create(preferenceTeam: PreferenceTeam): Promise<PreferenceTeam> {
    return this.preferenceTeamRepository.save(preferenceTeam);
  }

  update(id: number, preferenceTeam: PreferenceTeam): Promise<PreferenceTeam> {
    const option: FindOneOptions<PreferenceTeam> = {
        where: { id },
    };
    return this.preferenceTeamRepository.update(id, preferenceTeam).then(() => {
      return this.preferenceTeamRepository.findOne(option);
    });
  }

  delete(id: number): Promise<void> {
    return this.preferenceTeamRepository.delete(id).then(() => {
      return;
    });
  }
}
