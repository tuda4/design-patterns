'use strict';

class Car {
    constructor({name = 'Porches 911', price = 100, color = 'black', makeIn = 'Germ'}) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.makeIn = makeIn;
    }
}

class Truck {
    constructor({name = 'Truck', price = 100, color = 'black', makeIn = 'Germ'}) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.makeIn = makeIn;
    }
}

class ServiceLogistics {
    transportCar = Car
    getTransportCar = (customerInfo) => {
        return new this.transportCar(customerInfo)
    }
}

const carService = new ServiceLogistics()
console.log(carService.getTransportCar({customerInfo: {name: 'Porches Taycan', price: 1000, color: 'white', makeIn: 'vietnamese'}}))

carService.transportCar = Truck
console.log(carService.getTransportCar({name: 'Imtuda4', price: 1000, color: 'white', makeIn: 'vietnamese'}));

class TruckService extends ServiceLogistics {
    transportCar = Truck
}

const truckService = new TruckService()
console.log(truckService.getTransportCar({name: 'Truck 911'}))