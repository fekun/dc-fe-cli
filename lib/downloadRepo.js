const download = require('download-git-repo')
const util = require('util')
const { errInfo } = require('./config')
const ora = require('ora')
const spinner = ora()
const Exception = require('./exception')

module.exports = async (repoAddr, dirName) => {
  const _download = util.promisify(download)
  spinner.start('正在创建项目...')
  try {
    await _download(repoAddr, dirName)
    spinner.succeed('项目创建成功')
  } catch (err) {
    spinner.stop()
    throw new Exception({
      msg: errInfo.REPOERR,
      info: err
    })
  }
}
