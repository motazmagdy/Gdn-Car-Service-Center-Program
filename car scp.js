var fixesDetail ;
class CarsService {
    constructor(BS01,EF01,CF01,BF01,GF01){
        this.BS01=BS01
        this.EF01=EF01
        this.CF01=CF01
        this.BF01=BF01
        this.GF01=GF01 
    }
    getElementFromDOM(){
         fixesDetail = document.getElementById('chargesbill');
         fixesDetail.innerHTML=''
    }
    getBSBill(pricebs){
        this.getElementFromDOM()
        if(this.BS01){
            fixesDetail.innerHTML = `<b>Charges for </b> Basic Servicing - L.E. ${pricebs}<br>`
            return pricebs
        }else{
            return 0
        }
    }
    getEFBill(priceef){
        if(this.EF01){
            fixesDetail.innerHTML += `<b>Charges for </b> Engine Fixing - L.E. ${priceef}<br>`
            return priceef
        }else{
            return 0
        }
    }
    getCFBill(pricecf){
        if(this.CF01){
            fixesDetail.innerHTML += `<b>Charges for </b> Clutch Fixing - L.E. ${pricecf}<br>`
            return pricecf
        }else{
            return 0
        }
    }
    getBFBill(pricebf){
        if(this.BF01){
            fixesDetail.innerHTML += `<b>Charges for </b> Brake Fixing - L.E. ${pricebf}<br>`
            return pricebf
        }else{
            return 0
        }
    }
    getGFBill(pricegf){
        if(this.GF01){
            fixesDetail.innerHTML += `<b>Charges for </b> Gear Fixing - L.E. ${pricegf}<br>`
            return pricegf
        }else{
            return 0
        }
    }
    getTotalBill(pricebs,priceef,pricecf,pricebf,pricegf){
        var sum = this.getBSBill(pricebs) + this.getEFBill(priceef)+this.getCFBill(pricecf)+this.getBFBill(pricebf)+this.getGFBill(pricegf)
        let totalBill = document.getElementById('totalbill')
        totalBill.innerHTML = `Total Bill - L.E. ${sum}<br>`
        if(sum > 10000){
           let complBill = document.getElementById('complim')
           complBill.innerHTML =`You got a <b>Complimentary Cleaning</b> for free , Hope to see you again`
       } 
    }

}

class Hatchback extends CarsService {
    constructor(BS01,EF01,CF01,BF01,GF01){
        super(BS01,EF01,CF01,BF01,GF01)
        this.pricebs = 2000;
        this.priceef = 5000;
        this.pricecf = 2000;
        this.pricebf = 1000;
        this.pricegf = 3000;
    }
    getTotal(){
    this.getTotalBill(this.pricebs,this.priceef,this.pricecf,this.pricebf,this.pricegf)
    } 
    }

class Sedan extends  CarsService {
    constructor(BS01,EF01,CF01,BF01,GF01){
        super(BS01,EF01,CF01,BF01,GF01)
            this.pricebs = 4000 ;
            this.priceef = 8000 ;
            this.pricecf = 4000 ;
            this.pricebf = 1500 ;
            this.pricegf = 6000 ;
    }

    getTotal(){
        this.getTotalBill(this.pricebs,this.priceef,this.pricecf,this.pricebf,this.pricegf)
        }
}

class Suv extends  CarsService {
    constructor(BS01,EF01,CF01,BF01,GF01){
        super(BS01,EF01,CF01,BF01,GF01)
            this.pricebs = 5000;
            this.priceef = 10000;
            this.pricecf = 6000;
            this.pricebf = 2500;
            this.pricegf = 8000;
    }

    getTotal(){
        this.getTotalBill(this.pricebs,this.priceef,this.pricecf,this.pricebf,this.pricegf)
        }
}

function getServiceInfo(){
            
    let mainDiv = document.getElementById('bill')
    mainDiv.style.visibility='visible'
    let carType = document.getElementById('cars').value
    let cType = document.getElementById('ctbill')
    cType.innerHTML = `${carType} <br>`
    let fixType = document.getElementById('scsbill')

    let carServices = []
    let checkboxes = document.querySelectorAll('input[type=checkbox]')
    fixType.innerHTML = ''
    for ( let i =0 ; i < checkboxes.length;i++){
        if(checkboxes[i].checked){
            carServices.push(checkboxes[i].id)
            fixType.innerHTML += `<span> - ${checkboxes[i].id} </span>`
        }else{
            carServices.push(0)
        }
    }
    fixType.innerHTML += `<br>`
        
        if(carType == 'Hatchback'){
            var client = new Hatchback(...carServices)
        }else if(carType == 'Sedan'){
            var client = new Sedan(...carServices)
        }else if(carType == 'Suv'){
            var client = new Suv(...carServices)
        }
        client.getTotal()
        let clearCheckboxes = document.querySelectorAll('input[type=checkbox]')
        for(var y = 0 ; y < clearCheckboxes.length ; y++){
            clearCheckboxes[y].checked = false
        }
    }