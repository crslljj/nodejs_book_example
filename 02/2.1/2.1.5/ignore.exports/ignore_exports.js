module.exports = 'test for module.exports ignore!';
exports.name = 'danhuang';
exports.showName = function() {
  console.log('My name is Danhuang');
};
console.log(module.exports);
