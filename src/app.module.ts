import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user.module';
import { GameModule } from './module/game.module';
import { LeagueModule } from './module/league.module';
import { TeamModule } from './module/team.module';
import { PreferenceGameModule } from './module/preferencegame.module';
import { PreferenceLeagueModule } from './module/preferenceleague.module';
import { PreferenceTeamModule } from './module/preferenceteam.module';


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
}), UserModule, GameModule, LeagueModule, TeamModule, PreferenceGameModule, PreferenceLeagueModule, PreferenceTeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

