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
    this.eventoDecimal();
    this.eventoLimpiar();
    this.eventoQuitarUltimo();
    this.eventoPorciento();
  }

  EventoOperador() {
    this.vista.btnOperadores.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.vista.excedeLimite(this.modelo.numeroActual)) {
          this.modelo.reset();   
          this.vista.showResult('0');
          this.vista.showOperation('');
          return;
        }

        const oper = btn.dataset.op as '+' | '-' | 'x' | '÷';
        if (oper) this.modelo.ingresarOperador(oper);
        this.vista.showResult(this.modelo.numeroActual);
        this.vista.showOperation(this.modelo.operacionActual);
        this.vista.habilitarNumeros();
      })
    })
  }

  EventoNumeros() {
    this.vista.btnNumeros.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.vista.excedeLimite(this.modelo.numeroActual)) {
          this.modelo.reset();   
          this.vista.showResult('0');
          this.vista.showOperation('');
          return;
        }

        const numero = Number(btn.dataset.num);
        this.modelo.ingresarNumero(numero);
        this.vista.showResult(this.modelo.numeroActual);
        this.vista.showOperation(this.modelo.operacionActual);
      })
    })
  }

  eventoDecimal() {
    this.vista.btnDecimal.addEventListener('click', () => {
      this.modelo.ingresarDecimal();
      this.vista.showResult(this.modelo.numeroActual);
      this.vista.showOperation(this.modelo.operacionActual);
    })
  }

  EventoCalcular() {
    this.vista.btnIgual.addEventListener('click', () => {
      this.modelo.calcular();

      //solo si hubo cálculo real
      if (this.modelo.hayResultado) {
        this.vista.showResult(this.modelo.numeroActual);
        this.vista.habilitarNumeros();
        // const op=this.modelo.operacionActual;
        // const textOperacion=this.modelo.existePorcentaje?`${op}%=`:`${op}=`
        this.vista.showOperation(`${this.modelo.operacionActual} =`);
      }
    })
  }

  eventoLimpiar(){
    this.vista.btnLimpiar.addEventListener('click',()=>{
      this.modelo.reset();
        this.vista.showResult(this.modelo.numeroActual);
      this.vista.showOperation(this.modelo.operacionActual);

    })
  }
  eventoQuitarUltimo(){
    this.vista.btnQuitUlt.addEventListener('click',()=>{
      this.modelo.eliminarUltimo();
        this.vista.showResult(this.modelo.numeroActual);
      this.vista.showOperation(this.modelo.operacionActual);
    })
  }

  eventoPorciento(){
    this.vista.btnPorciento.addEventListener('click',()=>{
      this.modelo.porcentaje();
      // this.vista.showResult(this.modelo.numeroActual);
       this.vista.showOperation(this.modelo.operacionActual);
     
    })
  }

}