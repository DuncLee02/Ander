
class RentalCar {
  constructor(airport, to, from, type, uid, year, make, model, reservationArray) {
    this.airport = airport
    this.type = type
    this.to = to
    this.from = from
    this.model= model
    this.uid = uid
    this.year = year
    this.make = make
    this.model = model
    this.reservations = reservationArray
  }

  toArray() {
    return (
      [{"airport": this.airport}]
    )
  }
}

module.exports = RentalCar;
