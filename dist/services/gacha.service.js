"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GachaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const client_1 = require("@prisma/client");
const Utils = require("../utils/utils");
let GachaService = class GachaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createGachaData(itemId) {
        const items = itemId.map((itemId) => ({
            itemId,
            itemRarity: Utils.getRandomEnumValue(client_1.ItemRarity),
            itemType: Utils.getRandomEnumValue(client_1.ItemType),
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
        });
        return {
            gachaData
        };
    }
    async deleteGach(gachaId) {
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
};
exports.GachaService = GachaService;
exports.GachaService = GachaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GachaService);
//# sourceMappingURL=gacha.service.js.map