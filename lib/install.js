const ora = require('ora')
const spinner = ora()
const path = require('path')
const cp = require('child_process')
const util = require('util')
const exec = util.promisify(cp.exec)
const { errInfo } = require('./config')

module.exports = async dirName => {
  spinner.start('正在安装依赖')
  const dirPath = path.resolve(process.cwd(), dirName)
  try {
    const { stdout } = await exec('npm i', {
      cwd: dirPath
    })
    // FIXME: 解决npm i 输出的问题

    spinner.succeed('依赖安装成功')
  } catch (err) {
    spinner.fail('依赖安装失败')
    throw new Error(errInfo.NPMERR)
  }
}
