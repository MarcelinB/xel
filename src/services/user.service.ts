import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { FindOneOptions, Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    const options: FindOneOptions<User> = { where: { id } };
    return this.userRepository.findOne(options);
  }
  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  /*async update(id: number, user: User): Promise<User> {
    const options: FindOneOptions<User> = { where: { id } };
    await this.userRepository.update(options, user);
    return this.userRepository.findOne(options);
  }*/

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }


}
