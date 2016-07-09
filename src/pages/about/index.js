import React from 'react';
import styles from './index.scss';
import Image from '../../components/image/';

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.about}>
        <h1>ABOUT</h1>
        <p className={styles.text}>
          也不知在黑暗中究竟沉睡了多久
          也不知要有多难才能睁开双眼
          我从远方赶来 恰巧你们也在
          痴迷流连人间 我为她而狂野
          我是这耀眼的瞬间
          是划过天边的刹那火焰
          我为你来看我不顾一切
          我将熄灭永不能再回来
          我在这里啊
          就在这里啊
          惊鸿一般短暂
          像夏花一样绚烂
        </p>
        <Image imgSrc="home.jpg"/>
        <p className={styles.text}>
          这是一个多美丽又遗憾的世界
          我们就这样抱着笑着还流着泪
          我从远方赶来 赴你一面之约
          痴迷流连人间 我为她而狂野
          我是这耀眼的瞬间
          是划过天边的刹那火焰
          我为你来看我不顾一切
          我将熄灭永不能再回来
          我在这里啊
          就在这里啊
          惊鸿一般短暂
          如夏花一样绚烂
          我是这耀眼的瞬间
          是划过天边的刹那火焰
          我为你来看我不顾一切
          我将熄灭永不能再回来
          不虚此行呀
          不虚此行呀
          惊鸿一般短暂
          开放在你眼前
          我是这耀眼的瞬间
          是划过天边的刹那火焰
          我要你来爱我不顾一切
          我将熄灭永不能再回来
          一路春光啊
          一路荆棘呀
          惊鸿一般短暂
          如夏花一样绚烂
          这是一个不能停留太久的世界
        </p>
      </div>
    );
  }
}

module.exports = About;
