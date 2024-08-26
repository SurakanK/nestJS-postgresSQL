import { Controller, Post, Get, Res, Body, Delete, Param } from '@nestjs/common';
import { Response } from 'express';
import { CreateGachaDto } from 'src/model/gacha.model';
import { GachaService } from 'src/services/gacha.service';

@Controller('gacha')
export class GachaController {
    constructor(private readonly gachaService: GachaService) { }

    @Post()
    async createGacha(@Res() res: Response, @Body() body: CreateGachaDto) {
        return res.status(200).json(await this.gachaService.createGachaData(body.itemId));
    }

    @Get()
    async getGacha(@Res() res: Response) {
        return res.status(200).json(await this.gachaService.getGacha())
    }

    @Delete(":id")
    async deleteGacha(@Param("id") id: number, @Res() res: Response) {
        return res.status(200).json(await this.gachaService.deleteGach(Number(id)))
    }
}
