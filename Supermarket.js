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
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// Program to simulate the shopping scenario
function shoppingSimulation() {
    return __awaiter(this, void 0, void 0, function () {
        var totalBill, choice, _a, fruit, quantityInput, quantity, _b, vegetable, quantityInput, quantity, paymentMethod, paymentMethodInput;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    totalBill = 0;
                    console.log("Welcome to the supermarket!");
                    _c.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 8];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: 'number',
                            name: 'choice',
                            message: 'Do you want to buy fruits or vegetables? (Type 1 for \'fruits\' or 2 for \'vegetables\' or 3 to finish)',
                        })];
                case 2:
                    choice = (_c.sent()).choice;
                    if (!(choice === 1)) return [3 /*break*/, 4];
                    console.log("Available fruits: 1. Apple Rs200/kg , 2. Banana Rs200/Dozen, 3. Orange Rs200/Dozen");
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'number',
                                name: 'fruit',
                                message: 'Enter the number of fruit you want to buy:',
                            },
                            {
                                type: 'number',
                                name: 'quantityInput',
                                message: 'Enter the quantity:',
                            },
                        ])];
                case 3:
                    _a = _c.sent(), fruit = _a.fruit, quantityInput = _a.quantityInput;
                    quantity = parseInt(quantityInput || "0", 10);
                    totalBill += quantity * 200;
                    return [3 /*break*/, 7];
                case 4:
                    if (!(choice === 2)) return [3 /*break*/, 6];
                    console.log("Available vegetables: 1. Carrot Rs100/kg, 2. Potato Rs100/kg , 3. Onion Rs100/kg");
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'number',
                                name: 'vegetable',
                                message: 'Enter the Number of vegetable you want to buy:',
                            },
                            {
                                type: 'number',
                                name: 'quantityInput',
                                message: 'Enter the quantity:',
                            },
                        ])];
                case 5:
                    _b = _c.sent(), vegetable = _b.vegetable, quantityInput = _b.quantityInput;
                    quantity = parseInt(quantityInput || "0", 10);
                    totalBill += quantity * 100;
                    return [3 /*break*/, 7];
                case 6:
                    if (choice === 3) {
                        return [3 /*break*/, 8]; // Finish shopping
                    }
                    else {
                        console.log("Invalid choice. (Type 1 for 'fruits' or 2 for 'vegetables' or 3 to finish).");
                    }
                    _c.label = 7;
                case 7: return [3 /*break*/, 1];
                case 8:
                    // Scenario 2 - Checking Discounts
                    if (totalBill >= 1000) {
                        console.log("You buy more than Rs1000 that's why you qualify for a 20% discount!");
                        totalBill *= 0.8; // Apply 20% discount
                        console.log("Discounted Total: Rs".concat(totalBill));
                    }
                    // Scenario 3 - Checkout Process
                    console.log("Proceed to checkout...");
                    _c.label = 9;
                case 9:
                    if (!true) return [3 /*break*/, 11];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: 'input',
                            name: 'paymentMethod',
                            message: 'Select a payment method by typing 1 for bank credit/debit and 2 for cash on delivery?',
                        })];
                case 10:
                    paymentMethodInput = (_c.sent()).paymentMethod;
                    if (parseInt(paymentMethodInput) === 1 || parseInt(paymentMethodInput) === 2) {
                        return [3 /*break*/, 11]; // Valid payment method chosen
                    }
                    else {
                        console.log("Invalid payment method. (Please enter '1' for bank credit/debit and '2' for cash on delivery)");
                    }
                    return [3 /*break*/, 9];
                case 11:
                    console.log("Payment confirmed. Thank you for shopping with us!");
                    return [2 /*return*/];
            }
        });
    });
}
// Run the shopping simulation
shoppingSimulation();
