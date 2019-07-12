import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';
import ReactMarkdown from 'react-markdown';

const styles = {
    detail: {
        margin: 3 * 8,
    },
};

export default class RepositoryContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: false,
            navKey: 0,
            cnt: [],
        };
        this.init();
    }

    init = () => {
        this.detailContent = [];
        this.dataSource = [
            {
                nav: "docker",
                cont: [
                    {
                        "path": "https://docker.mirrors.ustc.edu.cn",
                        "name": "华中科技大学"
                    },
                    {
                        "path": "https://hub-mirror.c.163.com",
                        "name": "网易"
                    }
                ],
                paths: [
                    "https://docs.docker.com/registry/recipes/mirror/#use-case-the-china-registry-mirror",
                    "https://docs.docker.com/registry/recipes/mirror/#use-case-the-china-registry-mirror"
                ]
            },
            {
                nav: "npm",
                cont: [
                    {
                        "path": "https://docker.mirrors.ustc.edu.cn",
                        "name": "hah"
                    },
                    {
                        "path": "https://hub-mirror.c.163.com",
                        "name": "heihei"
                    }
                ],
                paths: [
                    "https://docs.docker.com/registry/recipes/mirror/#use-case-the-china-registry-mirror"
                ]
            }
        ];
    };

    handleClick = (event, key) => {
        const {faState = {}, setFaState} = this.props;
        faState.repositoryData.navKey = key;
        setFaState(faState);
    };

    changeDetail = () => {
        const navKey = this.state.navKey;
        if (!this.detailContent[navKey]) {
            fetch(`data/repository/${this.dataSource[navKey].nav}.md`)
                .then(response => response.text())
                .then(data => {
                    this.detailContent[navKey] = data;
                    this.setState({detail: !this.state.detail});
                }).catch(() => this.setState({detail: !this.state.detail}));
        } else {
            this.setState({detail: !this.state.detail});
        }
    };

    render() {
        const {faState} = this.props;
        const {repositoryData = {}} = faState;
        const {navKey = 0} = repositoryData;
        const data = this.dataSource[repositoryData.navKey || 0];

        return (
            <Grid container>
                <Grid item xs={2} value="nav">
                    <List>
                        {
                            this.dataSource.map((row, index) =>
                                (<ListItem selected={repositoryData.navKey === index}
                                           button={true} key={index}
                                           variant="contained" color="primary"
                                           onClick={event => this.handleClick(event, index)}
                                >{row.nav}</ListItem>)
                            )
                        }
                    </List>
                </Grid>
                <Grid item xs={9} value="content">
                    <Table style={styles.table}>
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
                            {data.cont.map((row, index) => (
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
                    <Grid container>
                        <Grid item md={12}>
                            <Button variant="contained" color="primary" style={styles.detail}
                                    onClick={this.changeDetail}>{this.state.detail === false ? "显示" : "隐藏"}帮助</Button>
                            <ButtonGroup style={styles.detail}>
                                {
                                    data.paths && data.paths.map((row, index, arr) =>
                                        (<Button component="a" href={row} underline="none"
                                                 target="_blank" rel="noopener" key={index}>
                                            参考网址{1 === arr.length ? null : index + 1}</Button>)
                                    )
                                }
                            </ButtonGroup>
                        </Grid>
                        <Grid item md={12}>
                            {this.state.detail === true ?
                                <ReactMarkdown source={this.detailContent[navKey] || "暂无帮助信息!"}/> : null}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}


