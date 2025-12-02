class Book{
    constructor(name,price,aurthor){
        this.name = name;
        this.price = price;
        this.aurthor = aurthor;
    }
   
}

Book.prototype.buy =  function(){
        console.log("yes you buy");
        
    }

let b1 = new Book("lessons of life",3000,"mishkat");
b1.buy();
let b2 = new Book("key of success",5000,"jamal");