import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {

    weight;
    height;
    result;

    handleWeightChange(event){
        this.weight = event.detail.value;
        this.updateResult();
    }

    handleHeightChange(event){
        this.height = event.detail.value;
        this.updateResult();
    }

    updateResult(){
        try{
            this.result = (this.weight/ Math.pow((this.height/100),2)).toFixed(2);
        }catch(exception){
            this.result = 0;
        }
        
    }

}