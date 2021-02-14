const db = require('../database');

const car = {
  getAllCars: function(callback) {
    return db.query('select * from car', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from car where idcar=?', [id], callback);
  },
  add: function(car, callback) {
    return db.query(
      'insert into car (brand,model,yearmodel) values(?,?,?)',
      [car.brand, car.model, car.yearmodel],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from car where idcar=?', [id], callback);
  },
  update: function(id, car, callback) {
    return db.query(
      'update car set brand=?,model=?, yearmodel=? where idcar=?',
      [car.brand, car.model, car.yearmodel, id],
      callback
    );
  },
  searchByBrand:function(value,callback) {
    const nameLike="%"+value+"%";
    return db.query('select * from car where brand LIKE ? order by idcar desc',[nameLike], callback);
  },
  searchByYearmodel:function(value,callback) {
    const yearmodel=value;
    return db.query('select * from car where yearmodel = ? order by idcar desc',[yearmodel], callback);
  }
};
module.exports = car;