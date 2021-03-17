class CalculatorOne{
    constructor(){

        this.buttons = document.querySelectorAll('button')
        this.operations = []
        this.locale = 'pt-br'
        // variaveis privadas
        this._dateEl = document.querySelector('.date')
        this._timeEl = document.querySelector('.hour')
        this.display = document.querySelector('.operations')
        this._currentDate
        this.click()
        this.hours()
    }
    // METODO PARA HORAS E DATA
    hours(){

        this.dateTime()
           setInterval(() => {
            this.dateTime()

           }, 1000);
    }
    dateTime(){
        return this.date = this.currentDate.toLocaleDateString(this.locale),
        this.time = this.currentDate.toLocaleTimeString(this.locale)
    } // dim de metodos para horas e datas


    //get e set , mudam as variaveis privadas sem eu acessalas diretamente
    get date (){
        return this._dateEl.innerHTML
   }
   set date (valor){
        this._dateEl.innerHTML = valor
   }

   get time (){
    return this._timeEl.innerHTML
    }
    set time(valor){
        this._timeEl.innerHTML = valor
    }

    get currentDate(){
        return new Date()
    }
    set currentDate(valor){
        this._currentDate.innerHTML = valor
    } // FIMM DOS GETS E SETS
  

    // METODO PARA FAZER OS CLICKS DOS BOTÕES
    click(){
        this.buttons.forEach(button => {
           button.addEventListener('click',num=>{
               
            let btn = button.value
            this.exec(btn)
           })
        });
    } // FIM DA FUNÇÃO CLICK

    clearAll(){
        this.operations = ''
        this.lastNumberToDisplay()

    }
    //METODO PARA LIMPAR O ULTIMO NUMERO DIGITADO
    clear(){
        this.operations.pop()

    } // FIM DO CLEAR



    // METODO PARA ADICIONAR NO ARRAY
    pushOperation(value){
        this.operations.push(value)
        // SE O ARRAY TIVER MAIS QUE 3 INDICE ELE FAZ A SOMA
        if(this.operations.length > 3){
           this.calc()

        }
    } // FIM DO PUSHOPERATION


        // METODO PARA CALCULAR
        calc(){
            // o last retorna o ultimo operador digitado
            let last = this.operations.pop()
            let result = eval(this.operations.join(''))

            this.operations = [result,last]
        
            this.lastNumberToDisplay()
        }
        // METODO PARA MOSTRAR NA TELA
        lastNumberToDisplay(){
             let lastNumber

            for (let i = this.operations.length - 1; i >= 0; i--) {

                if(!this.isOperator(this.operations[i])){
                     lastNumber = this.operations[i];
                    
                break;
                }

            }
            this.display.innerHTML = lastNumber
            // console.log(lastNumber);
        }

    // RETORNA O ULTIMO ITEM DO ARRAY
    getLastOperation(){
        return this.operations[this.operations.length - 1]
    } // FIM DA METODO GETLASTOPERATION()


    // RETORNA O ULTIMO ITEM DO ARRAY E ADICIONA O VALOR DO MOMENTO (VALUE)
    setLastOperation(value){ 

        this.operations[this.operations.length - 1] = value
   
   } // FIM DO METODO SETLASTOPERATION()
   isOperator(value){
      return (['+','-','%','x','/'].indexOf(value) > -1 )
      
   }

   // A LÓGICA DESSA FUNÇÃO É , NA PRIMEIRA VEZ QUE CLICAR NO BUTTON O  INDICE NO ARRAY VAI RETORNAR UNDEFINED,
   // PORQUE ELE ESTA VAZIO, NA PRIMEIRA VEZ VAI CAIR NESSE IF, NA SEGUNDA VEZ VAI CAIR NO ELSE,SE FOR NUM.
   // ISSO PORQUE CRIEI A FUNÇÃO  DE RETORNAR O ULTIMO ITEM DO ARRAY
    addOperation(value){

// VERIFICA QUAL É O ULTIMO OPERADOR DIGITADO RETORNARA UNDEFINED,E CAIRA AQUI
        if(isNaN(this.getLastOperation())){

            // VERIFICA SE O VALOR DO INDICE DIGITADO É UM OPERADOR, 
            //ELE ENTRA AQUI SE O VALOR DO ULTIMO FOR TAMBEM UM OPERADOR
            if(this.isOperator(value)){
                // O ULTIMO SENDO UM OPERADOR, ELE SUBSTITUI O ULTIMO POR O VALOR ATUAL (VALUE)
                this.setLastOperation(value)
                
            }
            else{ 
                // SE NÃO FOR OPERADOR É UM NÚMERO OU UM PONTO
                if(isNaN(value)){
                    // é ponto ou igual

                }else{

                    // PRIMEIRO ITEM DO ARRAY
                    this.pushOperation(value)
                    
                }
                
            }

        }else{ // DA SEGUNDA VEZ O ULTIMO NÚMERO SERA INT ENÃO CAI AQUI

            // SE O VALOR ATUAL FOR OPERADOR,ELE NÃO VAI CONCATENAR,VAI ADICIONAR NO PROXIMO INDÍCE
           if(this.isOperator(value)){
               this.pushOperation(value)

           }else{

            let newValue = this.getLastOperation().toString() + value.toString()
            this.setLastOperation(newValue)
            

           }
        }
        this.lastNumberToDisplay()
    }


    // FUNÇÃO QUE TRATA OS BOTÕES E SEPARA OS NUMEROS DOS OPERADORES

        exec(btn){
            switch(btn){
                case '1':
                    case '2':
                        case '3':
                            case '4':
                                case '5':
                                    case '6':
                                        case '7':
                                            case '8':
                                                case '9':
                                                    case '0':
                                                        this.addOperation(parseInt(btn))
                                                        break;

                                                        case '-':
                                                            case '+':
                                                                case '%':
                                                                    case '/':
                                                                        case 'x':
                                                                            case '=':
                                                                            this.addOperation(btn)
                                                                            break;


                                                                            case 'ac':
                                                                                this.clearAll()
                                                                                break

            }

        }
}