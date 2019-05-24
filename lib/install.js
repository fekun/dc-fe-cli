const ora = require('ora')
const spinner = ora()
const path = require('path')
const cp = require('child_process')
const util = require('util')
const exec = util.promisify(cp.exec)
const Exception = require('./exception')
const { errInfo } = require('./config')

module.exports = async dirName => {
  spinner.start('正在安装依赖')
  const dirPath = path.resolve(process.cwd(), dirName)
  try {
    await exec('npm i', {
      cwd: dirPath
    })
    spinner.succeed('依赖安装成功')
    // FIXME: 解决npm i 输出的问题
  } catch (err) {
    spinner.stop()
    throw new Exception({
      msg: errInfo.NPMERR,
      info: err
    })
  }
}
