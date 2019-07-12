import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
    tab: {
        minWidth: 110,
        maxWidth: 160,
    }
};
export default class Header extends React.Component {

    render() {
        const {handleTabChange, tabVal} = this.props;
        return (
            <Tabs onChange={handleTabChange}
                  value={tabVal}
                  indicatorColor="primary"
                  textColor="secondary">
                <Tab label="首页" style={styles.tab} value="index"/>
                <Tab label="门户" style={styles.tab} value="door"/>
                <Tab label="镜像" style={styles.tab} value="mirror"/>
                <Tab label="仓库" style={styles.tab} value="repository"/>
                <Tab label="代理" style={styles.tab} value="proxy"/>
                <Tab label="工具" style={styles.tab} value="tool"/>
                <Tab label="娱乐" style={styles.tab} value="amusement"/>
                <Tab label="其他" style={styles.tab} value="other"/>
            </Tabs>
        );
    }
};
