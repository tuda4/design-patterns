'use strict';

class DiscountPrice {
    calc(price) {
        return price*0.8
    }
}

class FeesVAT {
    calc(price) {
        return price*1.08
    }
}

class ShippingPrice {
    calc(price) {
        return price <= 500000 ? 25000 : price*0.02 + 25000
    }
}

class PriceProduct {
    constructor() {
        this.discountPrice = new DiscountPrice()
        this.feesVAT = new FeesVAT()
        this.shippingPrice = new ShippingPrice()
    }

    calc(price) {
        price = this.discountPrice.calc(price)
        console.log('[discountPrice]', price)
        price = this.feesVAT.calc(price)
        console.log('[feesVAT]', price)
        price += this.shippingPrice.calc(price)
        console.log('[shippingPrice]', price)
        return price
    }
}

function buy(price) {
    const perfume = new PriceProduct()
    return perfume.calc(price)
}

console.log('[price]', buy(300000))