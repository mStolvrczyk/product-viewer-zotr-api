"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartphonesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const smartphones_controller_1 = require("./controllers/smartphones.controller");
const smartphones_service_1 = require("./services/smartphones.service");
const smartphone_schema_1 = require("./schemas/smartphone.schema");
let SmartphonesModule = class SmartphonesModule {
};
SmartphonesModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Smartphone', schema: smartphone_schema_1.SmartphoneSchema }])],
        controllers: [smartphones_controller_1.SmartphonesController],
        providers: [smartphones_service_1.SmartphonesService],
    })
], SmartphonesModule);
exports.SmartphonesModule = SmartphonesModule;
//# sourceMappingURL=smartphones.module.js.map