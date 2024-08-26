import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ItemRarity, ItemType } from '@prisma/client';
import * as Utils from 'src/utils/utils';

@Injectable()
export class GachaService {
    constructor(private readonly prisma: PrismaService) { }

    async createGachaData(itemId: string[]) {
        const items = itemId.map((itemId) => ({
            itemId,
            itemRarity: Utils.getRandomEnumValue(ItemRarity),
            itemType: Utils.getRandomEnumValue(ItemType),
            dropRate: 0.5,
        }));
        return await this.prisma.gacha.create({
            data: {
                gachaType: 0,
                items: {
                    create: items,
                },
            },
        });
    }

    async getGacha() {
        const gachaData = await this.prisma.gacha.findMany({
            include: {
                items: true,
            },
        })
        return {
            gachaData
        }
    }

    async deleteGach(gachaId: number) {
        await this.prisma.gachaItem.deleteMany({
            where: {
                gachaId: gachaId,
            },
        });

        return await this.prisma.gacha.delete({
            where: {
                id: gachaId,
            },
        });
    }
}
