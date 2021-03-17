class Calculator{
    constructor(){
        this.numbers = []
        this.display = document.querySelector('#display')
        this._dateEl = document.querySelector('.date')
        this._timeEl = document.querySelector('.hour')
        this.toBeginOfZero()
        this._currentDate
        this.hours()
      
        this.begin()
    }
    begin(){
        let buttons = document.querySelectorAll('button')
        buttons.forEach(btn =>{
            this.clicks(btn)
        })
    }


    clicks(button){
        
        button.addEventListener('click',()=>{

            this.caseNumberOrNot(button.value)
          
        })
    }
    lastOperator(){
        
        return this.numbers[this.numbers.length -1]
    }
    setNumber(value){
         this.numbers[this.numbers.length -1] = value
    }
    operations(operations){
        
        
        return ['+','-','/','%','*','x','.'].indexOf(operations)
       
    }
    push(click){
        this.numbers.push(click)
        if(this.numbers.length > 3){
         
            this.calc();
        this.ToshowDisplay(this.numbers)

        
                 }
        
    }
    calc(){
         let last = this.numbers.pop()
        let res = eval(this.numbers.join(''))
         this.numbers = [res,last]
         return this.numbers
    }
    ToshowDisplay(operations){
        this.display.innerHTML = operations
    
    }
    toAdd(){
    
    if(this.numbers.length > 2){
        let res = eval(this.numbers.join(''))
         this.numbers = [res]

         this.ToshowDisplay(this.numbers)
    }
        
        
        

    }

    verification(click){
       
        if(isNaN(this.lastOperator())){

            if(this.operations(click) >= 0){
            
                this.setNumber(click)

                
            }else{
                this.numbers.push(click)
        this.ToshowDisplay(this.numbers)

                
            }
           
        }else{ 
           

            if(this.operations(click) >= 0){

                this.push(click)
            }else{

                let newValue = this.lastOperator().toString() + click.toString()
               this.setNumber(newValue)
                      
              
            }
        }  
        this.ToshowDisplay(this.numbers.join(''))

    }

    caseNumberOrNot(btn){
        switch (btn) {
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
                                                    this.verification(parseInt(btn))

                                                   
                                                    break;

                                                    case '+':
                                                        case '-':
                                                          
                                                            case '*':
                                                                this.verification(btn)
                                                               

                                                                case '/':
                                                                    this.verification(btn)
                                                                   break;
                                                                   case '=':
                                                                       this.toAdd()
                                                                       break;
                                                                       case 'ac':
                                                                           this.numbers = ['']
                                                                           this.ToshowDisplay(this.numbers)
                                                                           this.toBeginOfZero()
                                                                           
                                                                           break;
                                                                           
                                                                           case 'c':  
                                                                           
                                                                              this.clear()       
                                                                               break;
                                                                               case '.':
                                                                                  this.verification(btn)
                                                                                   break;
                                                                    default:
                                                                    break;
    }

    }

    clear(){
        if(this.operations(this.lastOperator()) >= 0){

            this.numbers.pop()
            this.ToshowDisplay(this.numbers)
            return
            
        }
        
         if (this.numbers.length == 3) {
          if(this.lastOperator().length == 1){
              this.numbers[2] = ''

              if(this.operations(this.numbers[1]) >= 0){
                 this.numbers.pop()
                 this.ToshowDisplay(this.numbers.join(''))
                 return
                 
             }
                          
          }
      

          let a = this.lastOperator().split('')
             
          
          this.lastOperator().split('')
              let array = []
               array = this.lastOperator().split('')
             array.pop()
             this.numbers[this.numbers.length -1] = array.join('')            
            
           this.ToshowDisplay(this.numbers.join(''))
          
        
           return
         }
            let string =  this.lastOperator().toString()
                                                                         
         
            let aux = string.split('')
            aux.pop()

          this.setNumber(aux.join(''))
          
         this.ToshowDisplay(this.numbers.join(''))
         this.toBeginOfZero()
                
    }
    toBeginOfZero(){
        if(this.numbers == ''){
         return   this.ToshowDisplay(0)
        }
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
}
window.calc = new Calculator()