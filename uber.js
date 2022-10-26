class uber {
    constructor(distance,rate,peoplewaiting, vehicelwaiting){
        this.distance = distance;
        this.rate = rate;
        this.peoplewaiting =peoplewaiting; 
        this.vehicelwaiting = vehicelwaiting
    }
    


getPayment(){
let price = (this.distance*this.rate) - (5*this.peoplewaiting) + (4*this.vehicelwaiting)
return (`The total price of uber is  ${price}`);
}
}
let uber1 = new uber(100,15,11,10)
console.log(uber1.getPayment())