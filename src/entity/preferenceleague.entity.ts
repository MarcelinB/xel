import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { League } from './league.entity';

@Entity()
export class PreferenceLeague {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  getAllMatchesFromLeague: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_user' })
  user: User;

  @ManyToOne(() => League)
  @JoinColumn({ name: 'id_league' })
  league: League;
}
