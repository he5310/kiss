import React from 'react';

import {X} from 'react-feather'

export default class Test extends React.Component {
  render() {
    return (
      <div style={{ borderRadius: 4, backgroundColor: '#eee', maxHeight: '8.5rem', overflow: "hidden", textOverflow: 'ellipsis' }}>
        <ul>
          <li>
            <div style={{ display: 'flex', justifyContent: "space-between", backgroundColor: '#ddd', lineHeight: '2rem',alignItems:'center' }}>
              <div>
                信息
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
                40分钟前
                <X style={{color:'gray'}}/>
              </div>
            </div>
            <div style={{height:'6.5rem',overflow:'hidden'}}>
              <div style={{ padding: '1rem', lineHeight: '1.5rem', boxSizing: 'border-box' }}>
                尊敬的客户，扣除您已产生的消费(8.90元)后，您当前余额42.66元。截至13日18时,您各项套餐的准实时消费情况如下:
【流量】国内流量包含0M，已超出4.616M，专用型流量，包含500M，剩余388.219M。
（二）专用型流量详情：
1、通用流量统付_成员套餐_限量(F)，包含国内流量500M，剩余388.219M。


【查积分和账单】请点击：http://dx.10086.cn/WXZY11


一、【51优惠】回复序号，惊喜等着你：
1106、周末追热剧，流量不用愁！
1107、注意！！！玩转“51优惠”，坐等流量来袭~~
1108、新年流量大派送，还有话费等你领！
114、【敲黑板】用流量，还要靠心得！

二、如需以下服务，请回复序号：
2、开通10元包100M流量加油包（仅限当月使用）
3、开通5元包30M流量加油包（仅限当月使用）
4、已开通业务查询及退订
5、套餐资费变更
6、流量及缴费攻略
回复免费，中国移动
            </div>
            </div>

          </li>
        </ul>
      </div>
    )
  }
}
