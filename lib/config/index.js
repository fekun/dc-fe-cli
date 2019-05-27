const errInfo = {
  NOEXIST: '暂不存在该模板',
  REPOERR: '项目创建失败',
  NPMERR: '依赖安装失败'
}

const gitAddr = 'gitlab:gitlab.dianchu.cc:'

const repos = {
  base: {
    pc: [
      {
        name: 'antd',
        addr: `${gitAddr}#base-pc-antd`
      },
      {
        name: 'ele',
        addr: `fekun/vue-cli-project-template#element-ui`
      }
    ],
    h5: [
      {
        name: 'only',
        // git@gitlab.dianchu.cc:dc_platform/operation_grand_century.git
        // https://gitlab.dianchu.cc/dc_platform/dc-vue-cli
        addr: `${gitAddr}dc_platform/operation_grand_century#ci`
      }
    ]
  },
  business: {
    pc: [
      {
        name: 'offical',
        addr: `${gitAddr}#business-pc-offical`
      },
      {
        name: 'game',
        addr: `${gitAddr}#business-pc-game`
      },
      {
        name: 'operation',
        addr: `${gitAddr}#business-pc-operation`
      },
      {
        name: 'plan',
        addr: `${gitAddr}#business-pc-plan`
      }
    ],
    h5: [
      {
        name: 'plan',
        addr: `${gitAddr}#business-h5-plan`
      }
    ]
  }
}

// TODO: 写个函数生成流程，共用一份repos
const newRepos = {
  base: {
    pc: [
      {
        name: 'antd',
        addr: `${gitAddr}#base-pc-antd`
      },
      {
        name: 'ele',
        addr: `fekun/vue-cli-project-template#element-ui`
      }
    ],
    h5: [
      {
        name: 'only',
        addr: `gitlab:gitlab.dianchu.cc:dc_platform/dc-order-front#master`
      }
    ]
  },
  business: {
    pc: [
      {
        name: 'offical',
        addr: `${gitAddr}#business-pc-offical`
      },
      {
        name: 'game',
        addr: `${gitAddr}#business-pc-game`
      },
      {
        name: 'operation',
        addr: `${gitAddr}#business-pc-operation`
      },
      {
        name: 'plan',
        addr: `${gitAddr}#business-pc-plan`
      }
    ],
    h5: [
      {
        name: 'plan',
        addr: `${gitAddr}#business-h5-plan`
      }
    ]
  }
}

module.exports = {
  errInfo,
  repos,
  newRepos
}
