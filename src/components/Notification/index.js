import React from 'react';

import styles from './index.less'

export default class NotifiCation extends React.Component{
  render(){
    return(
      <div className={styles.notificationWrap}>
        <h1>通知中心</h1>
      </div>
    )
  }
}
