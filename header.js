(function () {
    "use strict";
    var Header = React.createClass({
        render: function () {
            const { handleClick, menuTag } = this.props;
            return (
                <div id="header">
                    <div className="nav">
                        <a href="#index" onClick={handleClick} className={menuTag === 'index' ? "active" : null} >首页</a>
                        <a href="#door" onClick={handleClick} className={menuTag === 'door' ? "active" : null} >门户</a>
                        <a href="#mirror" onClick={handleClick} className={menuTag === 'mirror' ? "active" : null} >镜像</a>
                        <a href="#repository" onClick={handleClick} className={menuTag === 'repository' ? "active" : null} >仓库</a>
                        <a href="#proxy" onClick={handleClick} className={menuTag === 'proxy' ? "active" : null} >代理</a>
                        <a href="#tool" onClick={handleClick} className={menuTag === 'tool' ? "active" : null} >工具</a>
                        <a href="#amusement" onClick={handleClick} className={menuTag === 'amusement' ? "active" : null} >娱乐</a>
                        <a href="#other" onClick={handleClick} className={menuTag === 'other' ? "active" : null} >其他</a>
                    </div>
                    <div style={{clear: "both"}}></div>
                </div>
            );
        }
    });
    window.Header = Header;
})();
