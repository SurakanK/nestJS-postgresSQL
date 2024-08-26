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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GachaController = void 0;
const common_1 = require("@nestjs/common");
const gacha_model_1 = require("../model/gacha.model");
const gacha_service_1 = require("../services/gacha.service");
let GachaController = class GachaController {
    constructor(gachaService) {
        this.gachaService = gachaService;
    }
    async createGacha(res, body) {
        return res.status(200).json(await this.gachaService.createGachaData(body.itemId));
    }
    async getGacha(res) {
        return res.status(200).json(await this.gachaService.getGacha());
    }
    async deleteGacha(id, res) {
        return res.status(200).json(await this.gachaService.deleteGach(Number(id)));
    }
};
exports.GachaController = GachaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, gacha_model_1.CreateGachaDto]),
    __metadata("design:returntype", Promise)
], GachaController.prototype, "createGacha", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GachaController.prototype, "getGacha", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GachaController.prototype, "deleteGacha", null);
exports.GachaController = GachaController = __decorate([
    (0, common_1.Controller)('gacha'),
    __metadata("design:paramtypes", [gacha_service_1.GachaService])
], GachaController);
//# sourceMappingURL=gacha.controller.js.map