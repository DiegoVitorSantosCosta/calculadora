class Calculator{
    constructor(){

        this.begin()
        this.numbers = []
         
    }
    begin(){
        let buttons = document.querySelectorAll('input')
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
    operations(operations){
       return ['+','-','/','%','*','x'].indexOf(operations)
    }

    verification(click){
       

        if(isNaN(this.lastOperator())){

            if(this.operations < 0){
                console.log('é operador');
            }else{
                this.numbers.push(click)
                console.log(this.numbers ,' primeio num');
            }

           
        }else{ 
           // this.numbers = this.lastOperator.toString() + click.toString()
            if(isNaN(click)){

            }else{

                let newValue = this.lastOperator().toString() + click.toString()
                this.numbers = newValue
                console.log(this.numbers);
                console.log(this.lastOperator());

            }
         
        }

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
                                                        this.verification(btn)
                                                        break;
                                                        case '-':
                                                            this.verification(btn)
                                                            break
                                                            case '/':
                                                                this.verification(btn)
                                                                break;
                                                                case '*':
                                                                  
                                                                   
                                                                    break
                
                                                                    default:
                                                                    break;
    }

    }
}
window.calc = new Calculator()