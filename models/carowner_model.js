const db = require('../database');

const carowner = {
  getAllData: function(callback) {
    return db.query('select * from carowner', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from carowner where idcarowner=?', [id], callback);
  },
  add: function(carowner, callback) {
    return db.query(
      'insert into carowner (idcar,idowner) values(?,?)',
      [carowner.idcar, carowner.idowner],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from carowner where idcarowner=?', [id], callback);
  },
  update: function(id, carowner, callback) {
    return db.query(
        'update carowner set idcar=?,idowner=? where idcarowner=?',
        [carowner.idcar, carowner.idowner, id],
      callback
    );
  },
  getNameCarAndNameOwner: function(callback) {
    return db.query(`select owner.idowner, firstname, lastname, group_concat(concat(brand," ", model)) as "cars of the person" 
    from owner 
    inner join carowner on owner.idowner=carowner.idowner 
    inner join car on car.idcar=carowner.idcar 
    group by owner.idowner
  `, callback);
  },
//   searchByBrand:function(value,callback) {
//     const nameLike="%"+value+"%";
//     return db.query('select * from carowner where brand LIKE ? order by idcar desc',[nameLike], callback);
//   },
//   searchByYearmodel:function(value,callback) {
//     const yearmodel=value;
//     return db.query('select * from carowner where yearmodel = ? order by idcar desc',[yearmodel], callback);
//   }
};
module.exports = carowner;