import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entity/game.entity';
import { PreferenceGame } from './entity/preferencegame.entity';
import { PreferenceTeam } from './entity/preferenceteam.entity';
import { PreferenceLeague } from './entity/preferenceleague.entity';
import { League } from './entity/league.entity';
import { User } from './entity/user.entity';
import { Team } from './entity/team.entity';
import { UserModule } from './module/user.module';
import { GameModule } from './module/game.module';
import { LeagueModule } from './module/league.module';
import { TeamModule } from './module/team.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'db_user',
    password: 'db_password',
    database: 'esportAppDB',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
}), UserModule, GameModule, LeagueModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

