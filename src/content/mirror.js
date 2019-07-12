import React from 'react';

import Table from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';

export default class MirrorContent extends React.Component {

    constructor(props) {
        super(props);
        this.init();
    }

    init = () => {
        this.dataSource = [
            {
                nav: "综合",
                cont: [{
                    "path": "http://mirrors.sohu.com/",
                    "name": "搜狐",
                },
                    {
                        "path": "http://mirrors.163.com/",
                        "name": "网易",
                    },
                    {
                        "path": "http://mirrors.aliyun.com/",
                        "name": "阿里云",
                    },
                    {
                        "path": "http://mirror.hust.edu.cn/",
                        "name": "华中科技大学"
                    },
                    {
                        "path": "http://mirrors.tuna.tsinghua.edu.cn/",
                        "name": "清华大学"
                    },
                    {
                        "path": "http://mirror.bit.edu.cn/web/",
                        "name": "北京理工大学"
                    },
                    {
                        "path": "http://mirror.lzu.edu.cn/",
                        "name": "兰州大学"
                    },
                    {
                        "path": "http://mirrors.ustc.edu.cn/",
                        "name": "中国科技大学"
                    },
                    {
                        "path": "http://mirrors.neusoft.edu.cn/",
                        "name": "大连东软信息学院"
                    },
                    {
                        "path": "http://mirror.neu.edu.cn/",
                        "name": "东北大学"
                    },
                    {
                        "path": "http://mirror.dlut.edu.cn/",
                        "name": "大连理工大学"
                    },
                    {
                        "path": "http://mirror.bjtu.edu.cn/cn/",
                        "name": "北京交通大学"
                    },
                    {
                        "path": "http://mirrors.zju.edu.cn/",
                        "name": "浙江大学"
                    },
                    {
                        "path": "http://mirrors.cqu.edu.cn/",
                        "name": "重庆大学"
                    },
                    {
                        "path": "http://mirrors.nwsuaf.edu.cn/",
                        "name": "西北农林科技大学"
                    },
                    {
                        "path": "http://mirrors.yun-idc.com/",
                        "name": "首都在线科技股份有限公司"
                    },
                    {
                        "path": "http://mirrors.ctyun.cn/",
                        "name": "中国电信天翼云"
                    }]
            },
            {
                nav: "Apache",
                cont: [{
                    "path": "https://mirrors.tuna.tsinghua.edu.cn/apache/",
                    "name": "清华镜像"
                },
                    {
                        "path": "http://www.apache.org/mirrors/#cn",
                        "name": "apache官网(中国)"
                    },
                    {
                        "path": "http://mirror.bit.edu.cn/apache/",
                        "name": "北京理工大学"
                    },
                    {
                        "path": "http://apache.fayea.com/",
                        "name": "Fayea工作室"
                    }]
            },
            {
                nav: "CentOS",
                cont: [{
                    "path": "https://www.centos.org/download/mirrors/",
                    "name": "官方镜像列表"
                },
                    {
                        "path": "http://cloud.centos.org/centos/",
                        "comment": "没有老版本",
                        "name": "官方镜像1"
                    },
                    {
                        "path": "http://vault.centos.org/",
                        "comment": "包含老版本",
                        "name": "官方镜像2"
                    },
                    {
                        "path": "http://centos.mirror.liquidtelecom.com/",
                        "name": "liquidtelecom"
                    },
                    {
                        "path": "http://centos.bitcomm.cn/",
                        "comment": "只做CentOS镜像",
                        "name": "常州贝特康姆软件技术有限公司"
                    },
                    {
                        "path": "http://mirrors.pubyun.com/",
                        "name": "公云PubYun（母公司为贝特康姆）"
                    }]
            },
        ];
    };

    handleClick = (e, key) => {
        const {faState = {}, setFaState} = this.props;
        faState.mirrorData.navKey = key;
        setFaState(faState);
    };

    render() {
        const {faState} = this.props;
        const {mirrorData = {}} = faState;
        return (
            <Grid container>
                <Grid item xs={2} value="nav">
                    <List>
                        {
                            this.dataSource.map((row, index) =>
                                (<ListItem selected={mirrorData.navKey === index}
                                           button={true} key={index}
                                           variant="contained" color="primary"
                                           onClick={event => this.handleClick(event, index)}
                                >{row.nav}</ListItem>)
                            )
                        }
                    </List>
                </Grid>
                <Grid item xs={9} value="content">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>名称</TableCell>
                                <TableCell>路径</TableCell>
                                <TableCell>延迟(ms)</TableCell>
                                <TableCell>时间</TableCell>
                                <TableCell>备注</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.dataSource[mirrorData.navKey || 0].cont.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell><Link target="_blank" rel="noopener" href={row.path}
                                                     underline="none">{row.name}</Link></TableCell>
                                    <TableCell>{row.path}</TableCell>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>{row.data || window.AppUtils.getCurDate()}</TableCell>
                                    <TableCell>{row.comment}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        );
        /*return (<div className="mirror">
            <ul className="nav-left nav nav-pills nav-stacked">
                {
                    this.dataSource.map((item, index) =>
                        (<li className={mirrorData.navTag === index ? "active" : null}>
                            <button onClick={this.handleClick} data-tag={index}>{item.nav}</button>
                        </li>)
                    )
                }
            </ul>
            <div className="cont-right">
                <table>
                    <tr>
                        <th width="13%">名称</th>
                        <th width="20%">路径</th>
                        <th width="5%">延迟(ms)</th>
                        <th width="7%">时间</th>
                        <th width="5%">备注</th>
                    </tr>
                    {
                        dataInfo[mirrorData.navTag].cont.map(item =>
                            // (<li><a href={item.href} title={item.title || item.text} target={item.target || "_blank"} >{item.text}</a></li>)
                            (
                                <tr>
                                    <td><a href={item.path} title={item.comment || item.name} target={item.target || "_blank"} >{item.name}</a></td>
                                    <td>{item.path}</td>
                                    <td>{item.title}</td>
                                    <td>{item.data || window.AppUtils.getCurDate()}</td>
                                    <td>{item.comment}</td>
                                </tr>
                            )
                        )
                    }
                </table>
            </div>
        </div>);*/
    }
}