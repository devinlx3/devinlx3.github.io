const RepositoryContent = React.createClass({
    propTypes: {
    },
    getInitialState: function () {
        return {
            detail: false
        };
    },
    handleClick: function (event) {
        const { faState = {}, setFaState } = this.props;
        faState.repositoryData.navTag = Number(AppUtils.attr(event.target, "data-tag"));
        setFaState(faState);
    },
    changeDetail: function () {
        this.setState({detail: !this.state.detail});
    },
    render: function () {
        const { faState } = this.props;
        const { repositoryData = {} } = faState;
        const dataInfo = [{
            nav: "docker",
            cont: [{
                "path": "https://docker.mirrors.ustc.edu.cn",
                "name": "华中科技大学"
            }, {
                "path": "https://hub-mirror.c.163.com",
                "name": "网易"
            }],
            paths: [
                "https://docs.docker.com/registry/recipes/mirror/#use-case-the-china-registry-mirror"
            ],
            preCode: "",
            code: `方法一: Linux中修改/etc/docker/daemon.json
{
    "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn", "https://hub-mirror.c.163.com"]
}
方法二: 通过添加启动参数
$ dockerd --registry-mirror=https://registry.docker-cn.com
            `,
            sufCode: ""
        }];
        return (<div className="repository">
            <ul className="nav-left nav nav-pills nav-stacked">
                {
                    dataInfo.map((item, index) =>
                        (<li className={repositoryData.navTag === index ? "active" : null}>
                            <a href="javascript:void(0);" onClick={this.handleClick} data-tag={index}>{item.nav}</a>
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
                        dataInfo[repositoryData.navTag].cont.map(item =>
                            // (<li><a href={item.href} title={item.title || item.text} target={item.target || "_blank"} >{item.text}</a></li>)
                            (
                                <tr>
                                    {/* <td><a href={item.path} title={item.comment || item.name} target={item.target || "_blank"} >{item.name}</a></td> */}
                                    <td>{item.name}</td>
                                    <td>{item.path}</td>
                                    <td>{item.title}</td>
                                    <td>{item.data || AppUtils.getCurDate()}</td>
                                    <td>{item.comment}</td>
                                </tr>
                            )
                        )
                    }
                </table>
                <br />
                <div>
                    <button className="btn btn-primary" onClick={this.changeDetail} >{this.state.detail===false ? "显示" : "隐藏"}</button>
                    {
                        dataInfo[repositoryData.navTag].paths.map((item, index, arr) =>
                            (<span style={{ "margin-left": "30px" }}><a href={item} target="_blank" >参考网址{1 === arr.length ? null : index + 1}</a></span>)
                        )
                    }
                </div>
                {
                    this.state.detail === true ? (

                        <pre style={{ "margin-top": "15px" }}>
                            {dataInfo[repositoryData.navTag].code}
                        </pre>
                    ) : null
                }
            </div>
        </div>);
    }
});

