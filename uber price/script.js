


  class uber_price {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
    
    get value() {
      return this.fare();
    }
    
    fare() {
        let f=parseInt(this.end )-parseInt(this.start)
      return f;
    }
  }
  
  const uber_fare = new uber_price(20, 10);
  
  console.log(uber_fare.fare); 