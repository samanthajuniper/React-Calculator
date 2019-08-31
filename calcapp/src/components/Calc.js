import React, { Component } from 'react';
import CalcButtons from './CalcButtons';
import Display from './Display';



class Calc extends Component{
    constructor() {
        super()
        this.state = {
            val1: '',
            operator: '',
            val2: '',
            displayVal: '',
    }
}

     
        calculate = (e) => {
            console.log(e)
            if(e.target.dataset.type === 'num') {
                this.calcOutput(e);
            }

            switch(true){
                case (e.target.dataset.type === 'num' && this.state.operator === ''):
                    this.setState({
                        val1 : this.state.val1 + e.target.dataset.value,
                        displayVal : this.state.val1 + e.target.dataset.value,
                    });
                    break;

                case (e.target.dataset.type === 'op' && this.state.operator === '' && this.state.val1 !== ''):
                    this.setState({
                        operator: e.target.dataset.value
                    });
                    break;

                case (e.target.dataset.type === 'num' && this.state.operator !== '' && this.state.val1 !== '' ):
                    this.setState({
                        displayVal: '',
                        val2: this.state.val2 + e.target.dataset.value,
                        displayVal: this.state.val2 + e.target.dataset.value,
                    }) ;
                    break;
                    
                case(e.target.dataset.value === '%' && this.state.val1 !== ''):
                    this.getPercent(this.state.val1);
                    break;

                case(e.target.dataset.type === 'negate' && this.state.val1 > 0):
                    this.changeSign(this.state.val1);
                    break;

                case(e.target.dataset.type === 'op' && this.state.val1 !=='' && this.state.val2 !==''):
                    this.backToBack(this.state.val1, this.state.operator, this.state.val2)
                    break;
        
                case(e.target.dataset.value === '=') :
                    this.getAnswers(this.state.val1, this.state.operator, this.state.val2);
                    break;

                
                case(this.state.val1 < 0 && this.state.val2 !== '' && e.target.dataset.type === 'negate' ):
                   this.negateOps(this.state.val2);
                   break;
                 
                default:
                    console.log('something is wrong');
            }
        }

    //for performing an operation twice+ in a row
    backToBack = (val1, op, val2) => {
        console.log(val1, val2, op)
        switch(true){
            case(op === `+`):
                this.setState({
                    val2: '',
                    displayVal: +this.state.val1 + +this.state.val2,
                    val1: +this.state.val1 + +this.state.val2, 
                    operator: '+',
                })
                    break;
            case(op === `-`):
                this.setState({
                    val2: +this.state.val2,
                    displayVal: +this.state.val1 - +this.state.val2,
                    val1: +this.state.val1 - +this.state.val2, 
                    operator: '-',
                }) 
                    break;
            case(op === `/`):
                this.setState({
                    val2: +this.state.val2,
                    displayVal: +this.state.val1 / +this.state.val2,
                    val1: +this.state.val1 / +this.state.val2, 
                    operator: '/',
                }) 
                    break;
            case(op === `X`):
                this.setState({
                    val2: +this.state.val2,
                    displayVal: +this.state.val1 * +this.state.val2,
                    val1: +this.state.val1 * +this.state.val2, 
                    operator: 'X',
                }) 
                    break;
            default:
                console.log('something is wrong');
        }
    }
    
    //for calculating arithmetic after = is pushed
    getAnswers = async (val1, op, val2) => {
        this.setState(await {
            val1: parseFloat(val1),
            val2:  parseFloat(val2),
        })
        console.log(val1, op, val2)
           switch(true){
               case(op === '-'):
                   this.setState({
                       displayVal: +val1 - +val2,
                       val1: '',
                       operator: '',
                       val2: '',
                   }) 
                    break;
               case(op === '+'):
                   this.setState({
                       displayVal: +val1 + +val2,
                       val1: +val1 + +val2,
                       operator: '',
                       val2: '',
                   })
                   break; 
               case (op === `X`):
                    this.setState({
                        displayVal: (val1) * (val2),
                        val1: '',
                        operator: '',
                        val2: '',
                    })
                    break;
                case (op === '/'):
                    this.setState({
                        displayVal: val1 / val2,
                        val1: '',
                        operator: '',
                        val2: '',
                    })
                    break
                default:
                    console.log('something is wrong')
           }}


    //just for percent button
    getPercent = (value) => {
        this.setState({
            displayVal: +value / 100,
            val1: +value / 100
        })
    }

     //just for negating one thing
    changeSign = (val1) => {
        this.setState({
            displayVal: (this.state.val1 *(-1)),
            val1: (this.state.val1 *(-1)),
        })
    }

     //for negating two values that you want to perform arithmetic on 
    negateOps = (value) => {
        this.setState({
            val2: ((this.state.val2) * (-1)),
            displayVal: (this.state.val2 *(-1)),
        }) ;
    }
 
    // let displayLength; //trying to limit decimals here
    // displayLength = (display) => {
    //     if(display.length > 5) {
    //         this.setState({
    //             displayVal: display.toFixed(3)   
    //         })
    //     } else {
    //         this.setState({
    //            displayVal: display 
    //         })
    //     }
    // }


    
    calcOutput = (e) => {
        this.setState({
            displayVal:this.state.displayVal + e.target.dataset.value,
        })   
    } 
   
    
    clear = (e) => {
        if(e.target.dataset.value === `C`) {
            this.setState({
                val1: '',
                operator: '',
                val2: '',
                displayVal: '',
            }) 
        };

    }

    render(){
        return(
            <div>
                <div className={'display'}>
                    <Display value={this.state.displayVal}/>
                </div>
                <div className="keyPad">
                    <CalcButtons event = {this.clear} value = {'C'} className = {'dark'} />
                    <CalcButtons event = {this.calculate} value = {`+/-`} className = {'dark'} type={'negate'} />
                    <CalcButtons event = {this.calculate} value = {`%`} className = {'dark'} type={'op'}  />
                    <CalcButtons event = {this.calculate} value = {`/`} className = {'mainOperator'} type={'op'}/>
                    <CalcButtons event = {this.calculate}value = {7} type={'num'} />
                    <CalcButtons event = {this.calculate} value = {8} type={'num'} />
                    <CalcButtons event = {this.calculate} value = {9}  type={'num'}/>
                    <CalcButtons event = {this.calculate} value = {'X'} className = {'mainOperator'} type={'op'}  />
                    <CalcButtons event = {this.calculate} value = {4}type={'num'}/>
                    <CalcButtons event = {this.calculate} value = {5} type={'num'}/>
                    <CalcButtons event = {this.calculate} value = {6} type={'num'}/>
                    <CalcButtons event = {this.calculate} value = {`-`} className = {'mainOperator'} type={'op'}/>
                    <CalcButtons event = {this.calculate} value = {1} type={'num'}/>
                    <CalcButtons event = {this.calculate} value = {2} type={'num'}/>
                    <CalcButtons event = {this.calculate} value = {3} type={'num'} />
                    <CalcButtons event = {this.calculate}value = {`+`} className = {'mainOperator'} type={'op'} />
                    <CalcButtons event = {this.calculate}value = {0}  id={'zero'} type={'num'}/>
                    <CalcButtons event = {this.calculate}value = {`.`} type={'num'}/>
                    <CalcButtons event = {this.calculate}value = {`=`} className = {'mainOperator'} type={'op'} />
               </div>
            </div>
        )

    }

        
    }


export default Calc