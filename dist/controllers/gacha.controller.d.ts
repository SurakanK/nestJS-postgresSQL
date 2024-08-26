import { Response } from 'express';
import { CreateGachaDto } from 'src/model/gacha.model';
import { GachaService } from 'src/services/gacha.service';
export declare class GachaController {
    private readonly gachaService;
    constructor(gachaService: GachaService);
    createGacha(res: Response, body: CreateGachaDto): Promise<Response<any, Record<string, any>>>;
    getGacha(res: Response): Promise<Response<any, Record<string, any>>>;
    deleteGacha(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
}
