import { PrismaService } from './prisma.service';
export declare class GachaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createGachaData(itemId: string[]): Promise<{
        id: number;
        gachaType: number;
    }>;
    getGacha(): Promise<{
        gachaData: ({
            items: {
                id: number;
                gachaId: number;
                itemId: string;
                itemRarity: import(".prisma/client").$Enums.ItemRarity;
                itemType: import(".prisma/client").$Enums.ItemType;
                iconUrl: string;
                title: string;
                dropRate: number;
            }[];
        } & {
            id: number;
            gachaType: number;
        })[];
    }>;
    deleteGach(gachaId: number): Promise<{
        id: number;
        gachaType: number;
    }>;
}
