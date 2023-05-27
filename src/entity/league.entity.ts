import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Game } from './game.entity';

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
}
