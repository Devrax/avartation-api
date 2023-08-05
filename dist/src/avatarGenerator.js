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
import { getParts } from './getParts.js';
export var avatarGenerator = function (_a) {
    var bg = _a.bg, body = _a.body, hair = _a.hair, eye = _a.eye, mouth = _a.mouth, head = _a.head, outfit = _a.outfit, accessory = _a.accessory;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            return [2 /*return*/, ("\n    <style>\n\n.avatar-part {\n    position: absolute;\n    pointer-events: none;\n  }\n  \n  .bg {\n    z-index: 1;\n  }\n  .body {\n    z-index: 2;\n  }\n  .outfits {\n    z-index: 3;\n  }\n  .faces {\n    z-index: 4;\n  }\n  .hairs {\n    z-index: 5;\n  }\n  .eyes {\n    z-index: 6;\n  }\n  .mouths {\n    z-index: 7;\n  }\n  .facial-hair {\n    z-index: 8;\n  }\n  .accessories {\n    z-index: 9;\n  }\n  \n    </style>\n    <div id=\"main-content\" style=\"height: 320px;width:320;background:".concat(bg || 'rgb(252 165 165)', ";\">\n        ").concat(getParts('body', body), "\n        ").concat(getParts('hairs', hair, 32), "\n        ").concat(getParts('eyes', eye, 6), "\n        ").concat(getParts('mouths', mouth, 10), "\n        ").concat(getParts('faces', head, 8), "\n        ").concat(getParts('outfits', outfit, 25), "\n        ").concat(getParts('accessories', accessory, 10), "\n    </div>\n"))
                // ${getParts('facialHairs', facialHair, 8)}
            ];
        });
    });
};
// ${getParts('facialHairs', facialHair, 8)}
