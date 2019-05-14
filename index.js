#!/usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')
const downloadRepo = require('./utils/downloadRepo')
const install = require('./utils/install')
const outputDoc = require('./utils/outputDoc')
const { errInfo } = require('./config')
const { version } = require('./package.json')

program
  .version(version, '-v, --version')
  .command('create <dir>')
  .action(async dir => {
    let isCreated = false
    const answers = await inquirer.prompt([
      {
        type: 'list',
        message: '选择你的项目类型',
        name: 'repoType',
        choices: [
          {
            name: '官网|活动页',
            value: 'frontSite',
            short: '官网|活动页'
          },
          {
            name: '后台系统',
            value: 'backSite',
            short: '后台系统'
          }
        ]
      },
      {
        type: 'list',
        message: '选择终端',
        name: 'terminal',
        when (answers) {
          return answers.repoType === 'frontSite'
        },
        choices: [
          {
            name: 'pc端',
            value: 'pc',
            short: 'pc端'
          },
          {
            name: '移动端',
            value: 'h5',
            short: '移动端'
          }
        ]
      },
      {
        type: 'list',
        message: '选择ui模板',
        name: 'ui',
        when (answers) {
          return answers.repoType === 'backSite'
        },
        choices: [
          {
            name: 'elementUI',
            value: 'ele',
            short: 'elementUI'
          },
          {
            name: 'antd',
            value: 'antd',
            short: 'antd'
          }
        ]
      },
      {
        type: 'confirm',
        name: 'installed',
        message: '是否需要自动安装依赖',
        default: true
      }
    ])
    try {
      if (answers.repoType === 'frontSite') {
        if (answers.terminal === 'h5') {
          await downloadRepo('fekun/vue-cli-project-template#master-mobile', dir)
        } else if (answers.terminal === 'pc') {
          throw new Error(errInfo.NOEXIST)
        }
      } else if (answers.repoType === 'backSite') {
        if (answers.ui === 'ele') {
          await downloadRepo('fekun/vue-cli-project-template#element-ui', dir)
        } else if (answers.ui === 'antd') {
          throw new Error(errInfo.NOEXIST)
        }
      }
      isCreated = true
    } catch (e) {
      console.log(e)
      return
    }

    // 安装依赖
    try {
      answers.installed && isCreated && await install(dir)
    } catch (e) {
      outputDoc(false, dir)
      return
    }

    // 输出相关命令
    outputDoc(answers.installed, dir)
  })

// TODO: 可以生成单独创建jsx的组件
// program
//   .command('jsx <dir>')
//   .action(async dir => {
//     console.log(dir)
//   })

// parse param from process.argv
program.parse(process.argv)
