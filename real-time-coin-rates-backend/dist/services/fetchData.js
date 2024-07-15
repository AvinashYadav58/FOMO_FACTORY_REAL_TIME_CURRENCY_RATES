"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const axios_1 = __importDefault(require("axios"));
const coin_1 = __importDefault(require("../models/coin"));
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const cryptos = ['BTC', 'ETH', 'USDT', 'BNB', 'SOL'];
    const apiKey = process.env.API_KEY;
    for (const crypto of cryptos) {
        try {
            const response = yield axios_1.default.post("https://api.livecoinwatch.com/coins/single", {
                currency: "USD",
                code: crypto,
                meta: true,
            }, {
                headers: {
                    "content-type": "application/json",
                    "x-api-key": apiKey,
                },
            });
            console.log('coin data response', response.data);
            const data = response.data;
            console.log(`response of ${crypto} `, data);
            const newCoin = new coin_1.default({
                coin: crypto,
                name: data === null || data === void 0 ? void 0 : data.name,
                rate: data === null || data === void 0 ? void 0 : data.rate,
                rank: data === null || data === void 0 ? void 0 : data.rank,
                timestamp: new Date(),
            });
            newCoin.save()
                .then(() => {
                console.log('Currency saved successfully');
            })
                .catch((error) => {
                console.error('Error saving Currency:', error);
            });
        }
        catch (error) {
            console.error(`Error fetching data for ${crypto}:`, error);
        }
    }
});
exports.fetchData = fetchData;
