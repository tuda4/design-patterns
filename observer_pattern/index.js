'use strict';

class Observer{
    constructor (name) {
        this.namePick = name
    }

    updateLocation(location) {
        this.goToLocation(location)
    }

    goToLocation(location) {
        console.log(`${this.namePick} ::::PING:::: ${location}`)
    }
}

class subjectStatus {
    constructor() {
        this.observerList = []
    }

    addObserver(observer) {
        this.observerList.push(observer)
    }

    notificationObserver(location) {
        this.observerList.forEach(observer => observer.updateLocation(JSON.stringify(location)))
    }
}

const tuda4 = new Observer('tuda4')

const bogia626 = new Observer('bogia626')

const subject = new subjectStatus()

subject.addObserver(bogia626)
subject.addObserver(tuda4)

subject.notificationObserver({long: 88888, lat: 66666})

