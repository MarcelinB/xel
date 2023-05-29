import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PreferenceLeague } from 'src/entity/preferenceleague.entity';
import { FindOneOptions, Repository } from 'typeorm';


@Injectable()
export class PreferenceLeagueService {
  constructor(
    @InjectRepository(PreferenceLeague)
    private readonly preferenceLeagueRepository: Repository<PreferenceLeague>,
  ) {}

  findAll(): Promise<PreferenceLeague[]> {
    return this.preferenceLeagueRepository.find();
  }

  findById(id: number): Promise<PreferenceLeague> {
    const option: FindOneOptions<PreferenceLeague> = {
        where: { id } };
    return this.preferenceLeagueRepository.findOne(option);
  }

  create(preferenceLeague: PreferenceLeague): Promise<PreferenceLeague> {
    return this.preferenceLeagueRepository.save(preferenceLeague);
  }

  update(id: number, preferenceLeague: PreferenceLeague): Promise<PreferenceLeague> {
    return this.preferenceLeagueRepository.update(id, preferenceLeague).then(() => {
        const option: FindOneOptions<PreferenceLeague> = {
            where: { id } };
      return this.preferenceLeagueRepository.findOne(option);
    });
  }

  delete(id: number): Promise<void> {
    return this.preferenceLeagueRepository.delete(id).then(() => {
      return;
    });
  }
}
