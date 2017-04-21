const product1 = {
  basic: {
    name: "Thinkpad X1 Carbon",
    business: {
      title: "全网电商",
      data: [
        {
          name: "E-Ccomerce",
          type: "电商偏好",
          desc: "对该产品关注度较高的人群喜欢购买数码产品，爱保健爱运动；也经常购买美食、家电、服装"
        }
      ]
    },
    media: {
      title: "媒体品牌",
      data: [
        {
          name: "Media",
          type: "媒体偏好",
          desc: "该人群喜欢浏览IT数码资讯，经常看电影，喜欢美食；也经常浏览军事和读书板块"
        },
        {
          name: "Brand",
          type: "品牌偏好",
          desc: "该人群偏好电子类品牌较多，为Thinkpad联想的忠诚粉"
        }
      ]
    },
    basic: {
      title: "基本画像",
      data: [
        {
          name: "Gender",
          type: "性别",
          desc: "男性用户占比近六成"
        },
        {
          name: "Age",
          type: "年龄",
          desc: "以25-49岁人群为主要群体；其中25-34岁占比46%"
        },
        {
          name: "Consumption Level",
          type: "消费等级",
          desc: "高端消费者占比超5成\n中断消费者占比35.8%"
        },
        {
          name: "Geographic",
          type: "地域分布",
          desc: "国外用户占比仅为1.8%\n北上广等一线城市y用户对Carbon的关注度较高\n长三角地区对该产品关注度也相对较高"
        }
      ]
    }
  },
  // 地域
  area: {
    legend: ['北京', '上海', '山东', '海外', '广州'],
    data: [
        {value: 100, name: '北京'},
        {value: 80, name: '上海'},
        {value: 67, name: '山东'},
        {value: 30, name: '海外'},
        {value: 20, name: '广州'}
      ]
  },
  // 上网特征
  internetFeature: {
    //上网时段
    times: {
      legend: ['1-6', '7-8', '9-11', '12-13', '14-16', '17-18', '19-21', '22-24'],
      data: [
          {
              name:'电脑上网时段',
              type:'line',
              stack: '总量',
              data: [5, 100, 60, 50, 20, 30, 50, 15]
          },
          {
              name:'手机上网时段',
              type:'line',
              stack: '总量',
              data: [15, 20, 30, 40, 50, 60, 1, 10]
          }
      ]
    },
    // 手机端浏览器使用情况
    browser: {
      legend: ['Safari', 'Android Webkit Browser', 'UC浏览器', 'QQ浏览器', 'IE', 'Chrome', '搜狗浏览器', '360手机浏览器', '其它'],
      data: [
        {value: 1000, name: 'Safari'},
        {value: 800, name: 'Android Webkit Browser'},
        {value: 780, name: 'UC浏览器'},
        {value: 570, name: 'QQ浏览器'},
        {value: 400, name: 'IE'},
        {value: 270, name: 'Chrome'},
        {value: 250, name: '搜狗浏览器'},
        {value: 190, name: '360手机浏览器'},
        {value: 280, name: '其它'}
      ]
    }
  },
  // 用户性别年龄分布
  ageSex: {
    // 年龄分布
    age: {
      legend: ['小于18岁', '18-24岁', '25-34岁', '35-49岁', '49岁以上'],
      data: [
        {value: 40, name: '小于18岁'},
        {value: 50, name: '18-24岁'},
        {value: 10, name: '25-34岁'},
        {value: 12, name: '35-49岁'},
        {value: 18, name: '49岁以上'}
      ]
    }
  },
  // 家庭状况
  familyStatus: {
    // 性别
    sex: {
      legend: ['男', '女'],
      data: [
        {value: 80, name: '男'},
        {value: 50, name: '女'}
      ]
    },
    // 是否已婚
    married: {
      legend: ['已婚', '已婚'],
      data: [
        {value: 100, name: '已婚'},
        {value: 30, name: '未婚'}
      ]
    },
    // 是否有孩子
    baby: {
      legend: ['有孩子', '无孩子'],
      data: [
        {value: 20, name: '有孩子'},
        {value: 80, name: '无孩子'}
      ]
    }
  },
  // LenovoID - LenovoID有无
  lenovoID: {
    whetherOrNot: {
      legend: ['新注册LenovoID', '已有LenovoID'],
      data: [
        {value: 60, name: '新注册LenovoID'},
        {value: 30, name: '已有LenovoID'}
      ]
    },
    newOldUser: {
      legend: ['新注册LenovoID', '已有LenovoID'],
      data: [
        {value: 60, name: '新注册LenovoID'},
        {value: 30, name: '已有LenovoID'}
      ]
    }
  },
  // 行为偏好 - 手机应用
  mobileApps: {
    legend: ['主题壁纸', '办公软件', '浏览器', '聊天通讯', '其它'],
    data: [
      {value: 335, name: '主题壁纸'},
      {value: 233, name: '办公软件'},
      {value: 678, name: '浏览器'},
      {value: 109, name: '聊天通讯'},
      {value: 64, name: '其它'}
    ]
  },
  // 行为偏好 - PC应用
  pcApps: {
    legend: ['主题壁纸', '办公软件', '浏览器', '聊天通讯', '其它'],
    data: [
      {value: 335, name: '主题壁纸'},
      {value: 233, name: '办公软件'},
      {value: 678, name: '浏览器'},
      {value: 109, name: '聊天通讯'},
      {value: 64, name: '其它'}
    ]
  }
};

const product2 = {
  basic: {
    name: "小新",
    business: {
      title: "全网电商",
      data: [
        {
          name: "E-Ccomerce",
          type: "电商偏好",
          desc: "对该产品关注度较高的人群喜欢购买数码产品，爱保健爱运动；也经常购买美食、家电、服装"
        }
      ]
    },
    media: {
      title: "媒体品牌",
      data: [
        {
          name: "Media",
          type: "媒体偏好",
          desc: "该人群喜欢浏览IT数码资讯，经常看电影，喜欢美食；也经常浏览军事和读书板块"
        },
        {
          name: "Brand",
          type: "品牌偏好",
          desc: "该人群偏好电子类品牌较多，为Thinkpad联想的忠诚粉"
        }
      ]
    },
    basic: {
      title: "基本画像",
      data: [
        {
          name: "Gender",
          type: "性别",
          desc: "男性用户占比近六成"
        },
        {
          name: "Age",
          type: "年龄",
          desc: "以25-49岁人群为主要群体；其中25-34岁占比46%"
        },
        {
          name: "Consumption Level",
          type: "消费等级",
          desc: "高端消费者占比超5成\n中断消费者占比35.8%"
        },
        {
          name: "Geographic",
          type: "地域分布",
          desc: "国外用户占比仅为1.8%\n北上广等一线城市y用户对Carbon的关注度较高\n长三角地区对该产品关注度也相对较高"
        }
      ]
    }
  },
  // 地域
  area: {
    legend: ['北京', '上海', '山东', '海外', '广州'],
    data: [
        {value: 100, name: '北京'},
        {value: 80, name: '上海'},
        {value: 67, name: '山东'},
        {value: 30, name: '海外'},
        {value: 20, name: '广州'}
      ]
  },
  // 上网特征
  internetFeature: {
    //上网时段
    times: {
      legend: ['1-6', '7-8', '9-11', '12-13', '14-16', '17-18', '19-21', '22-24'],
      data: [
          {
              name:'电脑上网时段',
              type:'line',
              stack: '总量',
              data: [5, 100, 60, 50, 20, 30, 50, 15]
          },
          {
              name:'手机上网时段',
              type:'line',
              stack: '总量',
              data: [15, 20, 30, 40, 50, 60, 1, 10]
          }
      ]
    },
    // 手机端浏览器使用情况
    browser: {
      legend: ['Safari', 'Android Webkit Browser', 'UC浏览器', 'QQ浏览器', 'IE', 'Chrome', '搜狗浏览器', '360手机浏览器', '其它'],
      data: [
        {value: 1000, name: 'Safari'},
        {value: 800, name: 'Android Webkit Browser'},
        {value: 780, name: 'UC浏览器'},
        {value: 570, name: 'QQ浏览器'},
        {value: 400, name: 'IE'},
        {value: 270, name: 'Chrome'},
        {value: 250, name: '搜狗浏览器'},
        {value: 190, name: '360手机浏览器'},
        {value: 280, name: '其它'}
      ]
    }
  },
  // 用户性别年龄分布
  ageSex: {
    // 年龄分布
    age: {
      legend: ['小于18岁', '18-24岁', '25-34岁', '35-49岁', '49岁以上'],
      data: [
        {value: 40, name: '小于18岁'},
        {value: 50, name: '18-24岁'},
        {value: 10, name: '25-34岁'},
        {value: 12, name: '35-49岁'},
        {value: 18, name: '49岁以上'}
      ]
    }
  },
  // 家庭状况
  familyStatus: {
    // 性别
    sex: {
      legend: ['男', '女'],
      data: [
        {value: 80, name: '男'},
        {value: 50, name: '女'}
      ]
    },
    // 是否已婚
    married: {
      legend: ['已婚', '已婚'],
      data: [
        {value: 100, name: '已婚'},
        {value: 30, name: '未婚'}
      ]
    },
    // 是否有孩子
    baby: {
      legend: ['有孩子', '无孩子'],
      data: [
        {value: 20, name: '有孩子'},
        {value: 80, name: '无孩子'}
      ]
    }
  },
  // LenovoID - LenovoID有无
  lenovoID: {
    whetherOrNot: {
      legend: ['新注册LenovoID', '已有LenovoID'],
      data: [
        {value: 60, name: '新注册LenovoID'},
        {value: 30, name: '已有LenovoID'}
      ]
    },
    newOldUser: {
      legend: ['新注册LenovoID', '已有LenovoID'],
      data: [
        {value: 60, name: '新注册LenovoID'},
        {value: 30, name: '已有LenovoID'}
      ]
    }
  },
  // 行为偏好 - 手机应用
  mobileApps: {
    legend: ['主题壁纸', '办公软件', '浏览器', '聊天通讯', '其它'],
    data: [
      {value: 335, name: '主题壁纸'},
      {value: 233, name: '办公软件'},
      {value: 678, name: '浏览器'},
      {value: 109, name: '聊天通讯'},
      {value: 64, name: '其它'}
    ]
  },
  // 行为偏好 - PC应用
  pcApps: {
    legend: ['主题壁纸', '办公软件', '浏览器', '聊天通讯', '其它'],
    data: [
      {value: 335, name: '主题壁纸'},
      {value: 233, name: '办公软件'},
      {value: 678, name: '浏览器'},
      {value: 109, name: '聊天通讯'},
      {value: 64, name: '其它'}
    ]
  }
};

export default [product1, product2];
