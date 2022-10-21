const def = require('./export1')
console.log(def.person.village);
//2.importing districts
const dis = require('./export1')
console.log(dis.district);
//3.Apps
const app = require('./export1')
console.log(app.apps);

//4.cars
const car = require('./export1')
console.log(car.cars);

//5.bikes
const bike = require('./export1')
console.log(bike.bikes);