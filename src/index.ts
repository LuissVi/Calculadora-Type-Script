import { Calculator } from "./model/CalculatorModel.js";
import { Controller } from "./controller/CalculatorController.js";
import { View } from "./view/CalculatorView.js";

const modelo = new Calculator();
const vista = new View();
const controlador = new Controller(modelo, vista);