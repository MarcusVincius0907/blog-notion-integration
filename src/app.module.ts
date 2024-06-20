import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { NotionModule } from './modules/notion/notion.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    HttpModule,
    NotionModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '..', 'fe-financial-helper', 'dist'),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
