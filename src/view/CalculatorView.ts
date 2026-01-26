export class View {
     public operacion:HTMLParagraphElement;
    // public spanNum1:HTMLSpanElement;
    // public spanOp:HTMLSpanElement;
    // public spanNum2:HTMLSpanElement;
    public resultado:HTMLParagraphElement;
    
    public btnNumeros:NodeListOf<HTMLButtonElement>;
    public btnOperadores:NodeListOf<HTMLButtonElement>;
    public btnIgual:HTMLButtonElement;
    public btnLimpiar:HTMLButtonElement;
    public btnQuitUlt:HTMLButtonElement;

    constructor(){
        this.operacion=document.querySelector('.operacion')!;
        // this.spanNum1=document.querySelector('num-a')!;
        // this.spanOp=document.querySelector('op')!;
        // this.spanNum2=document.querySelector('num-b')!;
        this.resultado=document.querySelector('.resultado') as HTMLParagraphElement;
        this.btnNumeros=document.querySelectorAll('.num');
        this.btnOperadores=document.querySelectorAll('.operador');
        this.btnIgual=document.querySelector('.igual')!;
        this.btnLimpiar=document.querySelector('.clear')!;
        this.btnQuitUlt=document.querySelector('.quitar')!;
    }

     showResult(valor:number|string){
         this.resultado.textContent=valor.toString();
     }
    showOperation(valor:string){
        this.operacion.textContent=valor;
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