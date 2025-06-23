//kelas car untuk nyimpan identitas mobil
class Car {
    #timeStamp
    #plateNumber
    #merk

    constructor (plateNumber, timeStamp, merk) {
        this.#plateNumber = plateNumber
        this.#timeStamp = timeStamp
        this.#merk = merk
    }

    getPlateNumber() {
        return this.#plateNumber
    }

    getTimeStamp() {
        return this.#timeStamp
    }

    getMerk() {
        return this.#merk
    }

    getCarInfo() {
        let tampObj = {
            merk: this.#merk,
            timeStamp: this.#timeStamp,
            plateNumber: this.#plateNumber,
        }

        return tampObj
    }
}

// const mobilAvanza = new Car("B 805 FEB", new Date(), "Avanza")
// console.log(mobilAvanza.getPlateNumber(), "==> INI")

//buatin parking lot
//ini paling penting
//kalau value gaperlu pake this
class ParkingLot {
    constructor(id, capacity) {
        this.id = id 
        this.capacity = capacity
        this.parkingSpots = new Map() //lahan parkir
    }

    park(car) { //method ini buat parkir, car itu parameter
        console.log(car,"ini car")
        console.log(this.parkingSpots.size, "===> APA SIH INI")

        if (this.parkingSpots.size + 1 > this.capacity) { //dibuat valdiasi dulu
            console.log("aku tertekan ih")
            
            throw new Error("Parkir Penuh")
        }

        this.parkingSpots.set(car.plateNumber,car)

        let ticket = {
            numberPlate: car.plateNumber,
            timeStamp: new Date(),
            merk: car.merk
        }
        console.log(ticket, "==> INI TICKET MOBIL");
        return ticket
    }
    unpark() { //method ini buat cabs dari parkiran, disini hrus ngasih tiket balik

    }
    getParkLot() {
        return this.parkingSpots.entries()
    }
}

//ini udah diluar class
//lahan parkir udah disiapin
let lotA = new ParkingLot("lot A", 3) // ini instance untuk lahan parkir termasuk defined kuota parkir


//kita siapin mobil2nya, ini didapat dari class car
let mobil1 = new Car("D 7896 KUY", new Date(), "Honda Civic").getCarInfo()
console.log(mobil1, "ini mobil 1")
let mobil2 = new Car("G 7896 KUY", new Date(), "Honda Civic").getCarInfo()
let mobil3 = new Car("F 7896 KUY", new Date(), "Honda Civic").getCarInfo()
// let mobil4 = new Car("D 7896 KUY", new Date(), "Honda Civic").getCarInfo()

//sekarang mobil dimasukin ke lahan parkir -> pake park method
//mobil1 itu argumen
let mobil1Terparkir = lotA.park(mobil1)
console.log(mobil1Terparkir, "==> INI TICKETNYA")

let mobil2Terparkir = lotA.park(mobil2)
console.log(mobil2Terparkir, "==> INI TICKETNYA")

let mobil3Terparkir = lotA.park(mobil3)
console.log(mobil3Terparkir, "==> INI TICKETNYA")

// let mobil4Terparkir = lotA.park(mobil4)
// console.log(mobil4Terparkir, "==> INI TICKETNYA")

// lotA.getParkLot()
console.log(lotA.getParkLot(), "INI PARKINGLOT")
//kalau method atau function kalau mau dijalannin pake ()