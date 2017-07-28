
class RentalCar {
  constructor(airport, to, from, type, uid, year, make, model, starts) {
    this.airport = airport
    this.type = type
    this.to = to
    this.from = from
    this.model= model
    this.uid = uid
    this.year = year
    this.make = make
    this.model = model
    this.reservationStarts = starts
    this.reservationEnds = ends
  }
}

module.exports = RentalCar;
