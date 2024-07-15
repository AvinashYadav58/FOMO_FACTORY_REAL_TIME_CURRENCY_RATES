"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const coinSchema = new mongoose_1.default.Schema({
    coin: String,
    name: String,
    rate: Number,
    rank: Number,
    timestamp: Date,
});
const Coin = mongoose_1.default.model('crypto_currency', coinSchema);
exports.default = Coin;
