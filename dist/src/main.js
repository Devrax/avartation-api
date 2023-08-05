var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
import express from 'express';
import { avatarGenerator } from './avatarGenerator.js';
import { config } from 'dotenv';
import Puppeteer from 'puppeteer';
import Pupcore from 'puppeteer-core';
import Chromium from 'chrome-aws-lambda';
config();
var app = express(), port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '3000';
var isProduction = process.env.AWS_LAMBDA_FUNCTION_VERSION;
var puppeteer = isProduction ? Pupcore : Puppeteer;
app.get('/', function (_, res) { return res.redirect(302, 'https://www.avatartion.com/'); });
app.get("/api", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var options, _a, browser, page, searchParams, vdom, _b, elementHandle, imageBuffer, error_1;
    var _c;
    var _d, _e, _f, _g, _h, _j, _k, _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                if (!isProduction) return [3 /*break*/, 2];
                _c = {
                    args: __spreadArray(__spreadArray([], Chromium.args, true), ["--hide-scrollbars", "--disable-web-security"], false),
                    defaultViewpot: Chromium.defaultViewport
                };
                return [4 /*yield*/, Chromium.executablePath];
            case 1:
                _a = (_c.executablePath = _m.sent(),
                    _c.headless = true,
                    _c.ignoreHTTPSErrors = true,
                    _c);
                return [3 /*break*/, 3];
            case 2:
                _a = {
                    headless: true,
                    args: ['--no-sandbox']
                };
                _m.label = 3;
            case 3:
                options = _a;
                return [4 /*yield*/, puppeteer.launch(options)];
            case 4:
                browser = _m.sent();
                _m.label = 5;
            case 5:
                _m.trys.push([5, 11, 12, 14]);
                return [4 /*yield*/, browser.newPage()];
            case 6:
                page = _m.sent();
                searchParams = request.query;
                _b = "\n            ".concat;
                return [4 /*yield*/, avatarGenerator({
                        body: (_d = searchParams === null || searchParams === void 0 ? void 0 : searchParams.body) !== null && _d !== void 0 ? _d : null,
                        bg: (_e = searchParams === null || searchParams === void 0 ? void 0 : searchParams.bg) !== null && _e !== void 0 ? _e : null,
                        hair: (_f = searchParams === null || searchParams === void 0 ? void 0 : searchParams.hair) !== null && _f !== void 0 ? _f : null,
                        eye: (_g = searchParams === null || searchParams === void 0 ? void 0 : searchParams.eyes) !== null && _g !== void 0 ? _g : null,
                        mouth: (_h = searchParams === null || searchParams === void 0 ? void 0 : searchParams.mouth) !== null && _h !== void 0 ? _h : null,
                        head: (_j = searchParams === null || searchParams === void 0 ? void 0 : searchParams.face) !== null && _j !== void 0 ? _j : null,
                        outfit: (_k = searchParams === null || searchParams === void 0 ? void 0 : searchParams.outfit) !== null && _k !== void 0 ? _k : null,
                        accessory: (_l = searchParams === null || searchParams === void 0 ? void 0 : searchParams.accessory) !== null && _l !== void 0 ? _l : null
                    })];
            case 7:
                vdom = _b.apply("\n            ", [_m.sent(), "\n        "]);
                return [4 /*yield*/, page.setContent(vdom)];
            case 8:
                _m.sent();
                return [4 /*yield*/, page.$('#main-content')];
            case 9:
                elementHandle = _m.sent();
                return [4 /*yield*/, elementHandle.screenshot({ type: "png" })];
            case 10:
                imageBuffer = _m.sent();
                response.set('Content-Type', 'image/png');
                response.send(imageBuffer);
                return [3 /*break*/, 14];
            case 11:
                error_1 = _m.sent();
                console.error(error_1);
                response.status(500).send("Error during screenshot");
                return [3 /*break*/, 14];
            case 12: 
            // Close the browser
            return [4 /*yield*/, browser.close()];
            case 13:
                // Close the browser
                _m.sent();
                return [7 /*endfinally*/];
            case 14: return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () { return console.log("app listening on port localhost:".concat(port)); });
