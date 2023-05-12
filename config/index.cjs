/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc87fe3b076681c75',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd63b19ef7dace84d2093f8d8acbe7a93',

  PROVINCE: '广东',
  CITY: '深圳',
  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: false,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },
  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  USERS: [
    {
      // 想要发送的人的名字
      name: '小点点',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6QbX5qqxjrrOBsK4ihi8EKHuxOk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'gO9aUvNaPMnsuk56UybUKeeOlChhph3B99WpY4qno0g',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '06-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小点点', year: '1995', date: '07-05',
        },
        {
          type: '生日', name: '玛卡巴卡', year: '1993', date: '07-20',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2022', date: '12-29',
        },
        {
          type: '节日', name: '被搭讪纪念日', year: '2021', date: '05-01',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-05-20' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-12-29' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '玛卡巴卡',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6QbX5mjkoALXqlisGtftHDntRWE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'gO9aUvNaPMnsuk56UybUKeeOlChhph3B99WpY4qno0g',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        // },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小点点', year: '1995', date: '07-05',
        },
        {
          type: '生日', name: '玛卡巴卡', year: '1993', date: '07-20',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2022', date: '12-29',
        },
        {
          type: '节日', name: '被搭讪纪念日', year: '2021', date: '05-01',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-05-20' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-12-29' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'WSPS9Y5PJhrJB2TLhN0ftW-BDhONLgVbtAWFHfEXwV4',

  CALLBACK_USERS: [
    {
      name: '玛卡巴卡',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o6QbX5mjkoALXqlisGtftHDntRWE',
    }
  ],

}

module.exports = USER_CONFIG

