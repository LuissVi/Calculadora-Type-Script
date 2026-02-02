export class View {
    public operacion: HTMLParagraphElement;
    // public spanNum1:HTMLSpanElement;
     public spanOp:HTMLSpanElement;
    // public spanNum2:HTMLSpanElement;
    public resultado: HTMLInputElement;
    public btnNumeros: NodeListOf<HTMLButtonElement>;
    public btnOperadores: NodeListOf<HTMLButtonElement>;
    public btnIgual: HTMLButtonElement;
    public btnLimpiar: HTMLButtonElement;
    public btnQuitUlt: HTMLButtonElement;
    public btnDecimal: HTMLButtonElement;
    public btnPorciento: HTMLButtonElement;

    constructor() {
        this.operacion = document.querySelector('.operacion')!;
        // this.spanNum1=document.querySelector('num-a')!;
         this.spanOp=document.querySelector('.op')!;
        // this.spanNum2=document.querySelector('num-b')!;
        this.resultado = document.querySelector('.resultado') as HTMLInputElement;
        this.btnNumeros = document.querySelectorAll('.num');
        this.btnOperadores = document.querySelectorAll('.operador');
        this.btnIgual = document.querySelector('.igual')!;
        this.btnLimpiar = document.querySelector('.clear')!;
        this.btnQuitUlt = document.querySelector('.quitar')!;
        this.btnDecimal = document.querySelector('.decimal')!;
        this.btnPorciento=document.querySelector('.porciento')!;
    }

    showResult(valor: string) {
        this.resultado.value = valor.length > 10 ? `${valor.slice(0, 15)}...` : valor;
        if(this.resultado.value==='Infinity'){
             this.resultado.value="No se puede dividir ÷ 0"
         }
        // Bloquear o desbloquear botones
        const disable = valor.length >= 10;
        this.btnNumeros.forEach(btn => btn.disabled = disable);
    }

    habilitarNumeros() {
        this.btnNumeros.forEach(b => b.disabled = false);
    }

    showOperation(valor: string) {
        this.operacion.textContent = valor;
    }
  
    //posible caso de mas de 10 caracteres
    excedeLimite(valor: string): boolean {
        return valor.length > 10;
    }

    // showspanNum1(valor:string){
    //     this.spanNum1.textContent=valor;
    // }
    // showspanOper(valor:string){
    //     this.spanNum1.textContent=valor;
    // }
    // showspanNum2(valor:string){
    //     this.spanNum1.textContent=valor;
    // }
}