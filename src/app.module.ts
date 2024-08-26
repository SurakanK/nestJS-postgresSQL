import { Module } from '@nestjs/common';
import { GachaController } from './controllers/gacha.controller';

import { GachaService } from './services/gacha.service';
import { PrismaService } from './services/prisma.service';

@Module({
    imports: [],
    controllers: [
        GachaController
    ],
    providers: [
        PrismaService,
        GachaService
    ],
})
export class AppModule { }
