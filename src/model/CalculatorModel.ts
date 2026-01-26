type operador = '+' | '-' | 'x' | '÷';

export class Calculator {
  private numAnterior: number | null = null;
  private numActual: string = '0';
  private num2: null|number = 0;
  private operador: operador | null = null;

  get numeroActual(): string {
    return this.numActual;
  }

  get operacionActual(): string {
    if (this.numAnterior === null) return '';
    if (this.operador === null) return `${this.numAnterior}`;
    if (this.num2 === null) return `${this.numAnterior}${this.operador}`;
    return `${this.numAnterior}${this.operador}${this.num2}`;
  }
  ingresarOperador(op: operador) {
    if (this.numAnterior === null && this.numeroActual === '0' && op === '-') {
      this.numActual = '-';
      return;
    }
    if (this.numActual === '-') return;
    this.numAnterior = Number(this.numeroActual);
    this.operador = op;
     this.num2=null;
  }

  ingresarNumero(num: number) {
    if (this.numActual === '-' && this.numAnterior === null) {
      this.numActual += num.toString();
      return;
    }
    
    if (this.numAnterior !== null && this.operador !== null) {
      if(this.num2===null){
        this.numActual = num.toString();
      }else{
        this.numActual += num.toString();
      }
      this.num2 = Number(this.numActual);
        // console.log('DEBUG Número segundo:');
        // console.log('numAnterior:', this.numAnterior, typeof this.numAnterior);
        // console.log('num2:', this.num2, typeof this.num2); // ahora sí será 3
        // console.log('numActual:', this.numActual, typeof this.numActual);
      return;
    }
    if (this.numActual === '0') {
      this.numActual = num.toString();
    } else {
      this.numActual += num.toString();
    }
  }

  calcular(){
    let result=0;
    if(this.numAnterior===null||this.num2===null)return;
    switch (this.operador) {
      case '+':
        result=this.numAnterior+this.num2;
        this.numActual=result.toString();
        break;
      
        case '-':
        result=this.numAnterior-this.num2;
        this.numActual=result.toString();
        break;

         case 'x':
        result=this.numAnterior*this.num2;
        this.numActual=result.toString();
        break;

         case '÷':
        result=this.numAnterior/this.num2;
        this.numActual=result.toString();
        break;
      default:
        break;
    }
  }

}
