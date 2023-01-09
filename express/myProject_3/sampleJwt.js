const jwt = require('jsonwebtoken');
const token = jwt.sign({ foo: 'bar' }, 'sample@123');
const token2 = jwt.sign({
    data: 'foobar'
  }, 'sample@123', { expiresIn: 60 * 60 });
  

console.log(token);
console.log(token2);

try {
var decoded = jwt.verify(token, 'sample@123');
console.log(decoded);
}
catch(err) {
console.log(err);
}