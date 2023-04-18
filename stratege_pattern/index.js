'use strict'

/** 
 * Sale off when client preview order product
 * @param {*} originalPrice
 * @return 
 */

function prevOrderPrice(originalPrice) {
    return originalPrice <= 500 ? originalPrice*0.9 : originalPrice*0.75
}

/**
 * original sale off
 * @param {*} originalPrice
 * @return
 */

function originalPriceSaleOff(originalPrice) {
    return originalPrice <= 500 ? originalPrice - 19 : originalPrice - 39
}

/**
 * price in black friday
 * @param {*} originalPrice
 * @return 
 */

function blackFridayPrice(originalPrice) {
    return originalPrice <= 500 ? originalPrice*0.6 : originalPrice*0.4
}

/**
 * original price
 * @param {*} originalPrice
 * @return 
 */

function defaultPrice(originalPrice) {
    return originalPrice
}

// Object set price 

const getPriceStrategies = {
    originalPriceSaleOff,
    prevOrderPrice,
    blackFridayPrice,
    default: defaultPrice
}

const getPrice = (originalPrice, typePromotion) => {
    return getPriceStrategies[typePromotion](originalPrice)
}

console.log('[price]', getPrice(499, 'blackFridayPrice'))






