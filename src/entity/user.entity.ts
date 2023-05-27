import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  pseudonym: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  token: string;

  @Column({ nullable: true })
  avatar: string;
}