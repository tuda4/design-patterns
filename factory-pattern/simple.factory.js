'use strict';

class SimpleFactoryMethodPattern {
    constructor(name = 'Porches', price = 100, color ='red') {
        this.name = name
        this.price = price
        this.color = color
    }

    static createProduct(type) {
        switch(type){
            case '911':
                return new SimpleFactoryMethodPattern('Porches 911', 200, 'white' )
            case '912':
                return new SimpleFactoryMethodPattern('Porches 912',202, 'black' )
            default: 
            return new SimpleFactoryMethodPattern()
        }
    }
}


console.log(SimpleFactoryMethodPattern.createProduct('a'))

