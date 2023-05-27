import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Game } from './game.entity';
import { Team } from './team.entity';

@Entity()
export class League {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @ManyToOne(() => Game)
  @JoinColumn({ name: 'id_game' })
  game: Game;

  @ManyToMany(() => Team, team => team.leagues)
  teams: Team[];
}
