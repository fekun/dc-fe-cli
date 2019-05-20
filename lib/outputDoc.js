const chalk = require('chalk')

module.exports = (isInstall, dir) => {
  console.log('执行以下命令运行项目')
  console.log(chalk.blue(`cd ${dir}`))
  if (!isInstall) {
    console.log(chalk.blue('npm i'))
  }
  console.log(chalk.blue('npm run serve'))
}
