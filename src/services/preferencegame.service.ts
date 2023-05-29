import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PreferenceGame } from 'src/entity/preferencegame.entity';
import { FindOneOptions, Repository } from 'typeorm';


@Injectable()
export class PreferenceGameService {
  constructor(
    @InjectRepository(PreferenceGame)
    private preferenceGameRepository: Repository<PreferenceGame>,
  ) {}

  async findAll(): Promise<PreferenceGame[]> {
    return this.preferenceGameRepository.find();
  }

  async findById(id: number): Promise<PreferenceGame> {
    const option: FindOneOptions<PreferenceGame> = {
        where: { id } };
    return this.preferenceGameRepository.findOne(option);
  }

  async create(preferenceGame: PreferenceGame): Promise<PreferenceGame> {
    return this.preferenceGameRepository.save(preferenceGame);
  }

  async update(id: number, preferenceGame: PreferenceGame): Promise<PreferenceGame> {
    const option: FindOneOptions<PreferenceGame> = {
        where: { id } };
    const existingPreferenceGame = await this.preferenceGameRepository.findOne(option);
    if (!existingPreferenceGame) {
      throw new Error('PreferenceGame not found');
    }
    Object.assign(existingPreferenceGame, preferenceGame);
    return this.preferenceGameRepository.save(existingPreferenceGame);
  }

  async delete(id: number): Promise<void> {
    await this.preferenceGameRepository.delete(id);
  }
}
