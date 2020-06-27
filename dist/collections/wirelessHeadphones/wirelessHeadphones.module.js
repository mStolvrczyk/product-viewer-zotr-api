"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WirelessHeadphonesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const wirelessHeadphones_1 = require("./controllers/wirelessHeadphones");
const wirelessHeadphones_service_1 = require("./services/wirelessHeadphones.service");
const wirelessHeadphones_schema_1 = require("./schemas/wirelessHeadphones.schema");
let WirelessHeadphonesModule = class WirelessHeadphonesModule {
};
WirelessHeadphonesModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'WirelessHeadphones', schema: wirelessHeadphones_schema_1.WirelessHeadphonesSchema }])],
        controllers: [wirelessHeadphones_1.WirelessHeadphonesController],
        providers: [wirelessHeadphones_service_1.WirelessHeadphonesService],
    })
], WirelessHeadphonesModule);
exports.WirelessHeadphonesModule = WirelessHeadphonesModule;
//# sourceMappingURL=wirelessHeadphones.module.js.map