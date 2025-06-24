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

        this.parkingSpots.set(car.plateNumber, car)

        let ticket = {
            numberPlate: car.plateNumber,
            timeStamp: new Date(),
            merk: car.merk
        }
        console.log(ticket, "==> INI TICKET MOBIL");
        return ticket
    }
    unpark(ticket) { //method ini buat cabs dari parkiran, disini hrus ngasih tiket balik
       
        if (ticket) {
            throw new Error("Tidak punya ticket")
        }

        if (this.parkingSpots.has(ticket.parkingSpots)) {
            throw new Error("Mobil tidak ditemukan")
        }
        this.parkingSpots.delete(ticket.numberPlate)

    }
    getParkLot() {
        return this.parkingSpots.entries()
    }
}

//area parking ini kardusnya, untuk mengelola beberapa lahan parkir
class AreaParking {
    constructor(name) {
        this.nameManager = name
        this.LotParking = new Map() //tempat nampung lahan pak budi
    }

    addLotParking(inputLot) {
        this.LotParking.set(inputLot.id, inputLot) //buat isi tempat tampungan pak budi
    }

    getDataLotParking() {
        return this.LotParking
    }

    // getDataLotA() {
    //     return this.LotParking.got("A")
    // }

    park(car) {
        console.log(this.LotParking,"ini parkir pak budi")
        for (let index = 0; index < this.LotParking.size; index++) {
        // if (this.LotParking < )
        console.log(this.LotParking.values())
        //iterator harus diubah ke array
        let manipulateArray = Array.from(this.LotParking.values())
        //udah jadi array
        let currentParkingLot = manipulateArray[index]
        console.log(currentParkingLot, "ini current parking")

        let capacityCurrentParking = currentParkingLot.capacity
        console.log(capacityCurrentParking, "ini capacity current")
        let parkingSpotsCurrentParking = currentParkingLot.parkingSpots.size
        console.log(parkingSpotsCurrentParking, currentParkingLot)
        
        if (capacityCurrentParking > parkingSpotsCurrentParking) {
            return currentParkingLot.park(car)
        }
        }
        console.log("parkir penuhh")

    }
}

//ini udah diluar class
//lahan parkir udah disiapin
let lotA = new ParkingLot("Lot A", 3) // ini instance untuk lahan parkir termasuk defined kuota parkir
let lotB = new ParkingLot("Lot B", 1)
let lotC = new ParkingLot("lot C", 2)
console.log (lotB, "ini lotB")

//ini yang mau dimasukin ke dalam kardus
//kita siapin mobil2nya, ini didapat dari class car
let mobil1 = new Car("D 7896 KUY", new Date(), "Honda Civic").getCarInfo()
let mobil2 = new Car("G 7896 KUY", new Date(), "Honda Civic").getCarInfo()
let mobil3 = new Car("F 7896 KUY", new Date(), "Honda Civic").getCarInfo()
let mobil4 = new Car("D 7896 KUY", new Date(), "Honda Civic").getCarInfo()


//sekarang mobil dimasukin ke lahan parkir -> pake park method
//mobil1 itu argumen
let mobil1Terparkir = lotA.park(mobil1)
console.log(mobil1Terparkir, "==> INI TICKETNYA")

let mobil2Terparkir = lotA.park(mobil2)
console.log(mobil2Terparkir, "==> INI TICKETNYA")

let mobil3Terparkir = lotA.park(mobil3)
console.log(mobil3Terparkir, "==> INI TICKETNYA")

//ini instance area parking
let areaParkingBudi = new AreaParking("Budi")

areaParkingBudi.addLotParking(lotA)
areaParkingBudi.addLotParking(lotB)
areaParkingBudi.addLotParking(lotC)

let cekLotBudi = areaParkingBudi.getDataLotParking()


let areanyaPakBudi = areaParkingBudi.getDataLotParking()

// lotA.unpark(mobil1Terparkir)

// let mobil4Terparkir = lotA.park(mobil4)
// console.log(mobil4Terparkir, "==> INI TICKETNYA")

// lotA.getParkLot()
console.log(lotA.getParkLot(), "INI PARKINGLOT")
//kalau method atau function kalau mau dijalannin pake ()

// console.log(areaParkingBudi.getDataLotA(), "==> ini lot a")
let park = areaParkingBudi.park(mobil4)
console.log(cekLotBudi, "finall")