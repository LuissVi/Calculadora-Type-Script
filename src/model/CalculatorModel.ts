type operador = '+' | '-' | 'x' | '÷';
const MAX_DIGITOS = 9;
export class Calculator {
  private numAnterior: number | null = null;
  private numActual: string = '0';
  private num2: null | number = 0;
  private operador: operador | null = null;
  private resultado: boolean = false;
  private esPorcentaje: boolean = false;

  private encontrarPorcentaje: number | null = null;

  get numeroActual(): string {
    return this.numActual;
  }

  // get operacionActual(): string {
  //   if (this.numAnterior === null) return '';
  //   if (this.operador === null) return `${this.numAnterior}`;
  //   if (this.num2 === null) return `${this.numAnterior}${this.operador}`;
  //   return `${this.numAnterior}${this.operador}${this.num2}`;
  // }

  get hayResultado(): boolean {
    return this.resultado;
  }

  get existePorcentaje() {
    return this.esPorcentaje;
  }

  get esNumPorcentaje() {
    return this.encontrarPorcentaje;
  }

  //getter para el %
  get operacionActual(): string {
    if (this.numAnterior === null) return '';

    if (this.operador === null) {
      return this.numAnterior.toString();
    }

    if (this.num2 === null) {
      return `${this.numAnterior}${this.operador}`;
    }

    if (this.esPorcentaje && this.encontrarPorcentaje !== null) {
      return `${this.numAnterior}${this.operador}${this.encontrarPorcentaje}%`;
    }

    return `${this.numAnterior}${this.operador}${this.num2}`;
  }


  ingresarOperador(op: operador) {
    // Si ya tenemos los componentes para una operación, calculamos primero
    if (this.numAnterior !== null && this.num2 !== null) {
      this.calcular();
    }
    this.resultado = false;

    if (this.numAnterior === null && this.numeroActual === '0' && op === '-') {
      this.numActual = '-';
      return;
    }
    if (this.numActual === '-') return;
    this.numAnterior = Number(this.numeroActual);
    this.operador = op;
    this.num2 = null;
    //caso existe porciento
    if (this.esNumPorcentaje) {
      this.esPorcentaje = false;
      this.num2 = null;
      this.numAnterior = Number(this.numActual);
    }
  }

  ingresarNumero(num: number) {
    // Si venimos de un "=" (calcular), reseteamos todo para empezar de cero
    if (this.resultado) {
      this.numActual = '0';
      this.numAnterior = null;
      this.operador = null;
      this.num2 = 0;
      this.resultado = false;
    }

    // Caso segundo número
    if (this.numAnterior !== null && this.operador !== null) {
      //  if (this.numActual.length >= MAX_DIGITOS) return;

      if (this.num2 === null || this.numActual === '0') {
        this.numActual = num.toString();
      }
      else {
        this.numActual += num.toString();
      }

      this.num2 = Number(this.numActual);
      return;
    }

    //primer número
    if (this.numActual.length >= MAX_DIGITOS) return;

    if (this.numActual === '0') {
      this.numActual = num.toString();
    }

    else {
      this.numActual += num.toString();
    }
  }

  ingresarDecimal() {
    // Si venimos de un resultado, empezamos de cero
    if (this.resultado) {
      this.numActual = '0.';
      this.numAnterior = null;
      this.operador = null;
      this.num2 = 0;
      this.resultado = false;
    }
    //si el nro ya tiene un decimal no se hace nada
    if (this.numActual.includes('.')) return;

    //caso negativo
    if (this.numActual === '-') {
      this.numActual = '0.';
      return;
    }

    //caso normal(0)
    if (this.numActual === '0') {
      this.numActual = '0.';
      return;
    }
    //caso general
    this.numActual += '.'
  }

  //resetea todos los valores
  reset() {
    this.numActual = '0';
    this.numAnterior = null;
    this.num2 = 0;
    this.operador = null;
    this.resultado = false;
    this.esPorcentaje = false;
    this.encontrarPorcentaje = null;
  }

  //eliminar ultimo caracter
  eliminarUltimo() {
    if (this.resultado) {
      this.reset();
      return;
    }
    if (this.numActual.length <= 1 || this.numActual === '-') {
      this.numActual = '0';
    } else {
      this.numActual = this.numActual.slice(0, -1);
    }
    //actualizar si estamos en el segundo nro
    if (this.numAnterior !== null && this.operador !== null) {
      this.num2 = Number(this.numActual);

    }
  }

  calcular() {
    if (
      this.numAnterior === null ||   // no hay primer número
      this.operador === null ||      // no hay operador
      this.num2 === null ||          // no hay segundo número
      this.numActual === '-' ||      // estado inválido
      this.numActual === ''          // seguridad extra
    ) {
      return;
    }

    let result = 0;
    switch (this.operador) {
      case '+': result = this.numAnterior + this.num2; break;
      case '-': result = this.numAnterior - this.num2; break;
      case 'x': result = this.numAnterior * this.num2; break;
      case '÷': result = this.numAnterior / this.num2; break;

    }
    result = Number(result.toFixed(3));
    this.numActual = result.toString();
    this.resultado = true; // <--- Marcamos que el cálculo terminó(existe un resultado)
  }

  porcentaje() {
    if (
      this.numAnterior === null ||
      this.operador === null ||
      this.num2 === null ||
      this.numActual === '-' ||
      this.numActual === ''
    ) {
      return;
    }
    this.encontrarPorcentaje = this.num2;
    switch (this.operador) {
      case '+':
      case '-':
        this.num2 = this.numAnterior * this.num2 / 100;
        this.numAnterior = this.numAnterior;
        this.esPorcentaje = true;
        break;
      case 'x':
        this.num2 = this.num2 / 100;
        this.numAnterior = this.numAnterior;
        this.esPorcentaje = true;
        break;
      case '÷':
        this.num2 = this.numAnterior * this.num2 / 100;
        this.numAnterior = this.numAnterior;
        this.esPorcentaje = true;
      default:
        break;
    }

  }
}
