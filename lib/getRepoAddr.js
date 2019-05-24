const { repos } = require('./config/index')

// 获取模板地址
module.exports = ({ repoType, terminal, name = 'only' }) => {
  const arr = repos[repoType][terminal]
  let addr = ''
  arr.some(item => {
    if (item.name === name) {
      addr = item.addr
      return true
    }
    return false
  })
  return addr
}
