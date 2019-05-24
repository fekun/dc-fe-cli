module.exports = function Exception ({ msg, info = '' }) {
  this.msg = msg
  this.info = info
}
