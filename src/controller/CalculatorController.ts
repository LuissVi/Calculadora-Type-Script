import { Calculator } from "../model/CalculatorModel.js";
import { View } from "../view/CalculatorView.js";
export class Controller {

  private modelo: Calculator;
  private vista: View;

  constructor(modelo: Calculator, vista: View) {
    // console.log("Controller creado");
    this.modelo = modelo;
    this.vista = vista;
    this.vista.showResult(this.modelo.numeroActual)
    this.EventoOperador();
     this.EventoNumeros();
     this.EventoCalcular();
  }

  EventoOperador() {
    this.vista.btnOperadores.forEach(btn => {
      btn.addEventListener('click',()=>{
        const oper=btn.dataset.op as '+' | '-' | 'x' | '÷';
        if(oper)this.modelo.ingresarOperador(oper);
        this.vista.showResult(this.modelo.numeroActual);
        this.vista.showOperation(this.modelo.operacionActual);
      })
    })
  }

  EventoNumeros(){
    this.vista.btnNumeros.forEach(btn=>{
      btn.addEventListener('click',()=>{
        const numero=Number(btn.dataset.num);
        this.modelo.ingresarNumero(numero);
        this.vista.showResult(this.modelo.numeroActual);
        this.vista.showOperation(this.modelo.operacionActual);

      })
    })
  }

  EventoCalcular(){
    this.vista.btnIgual.addEventListener('click',()=>{
      this.modelo.calcular();
      this.vista.showResult(this.modelo.numeroActual);
       this.vista.showOperation(`${this.modelo.operacionActual} =`);
    })
  }
}