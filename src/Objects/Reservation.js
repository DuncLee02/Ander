
class Reservation {
  constructor(airport, to, from, type, uid, year, make, model, starts, ends) {
    this.airport = airport
    this.to = to
    this.from = from
    this.type = type
    this.uid = uid
    this.year = year
    this.make = make
    this.model = model
    this.reservationStarts = starts
    this.reservationEnds = ends
  }
}

module.exports = Reservation;
