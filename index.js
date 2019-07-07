const App = React.createClass({
    propTypes: {
    },
    getInitialState: function () {
        return {
            menuTag: (location.hash.replace("#", "") || "index")
        };
    },
    handleMenu(event) {
        if(event.target.classList && event.target.classList.contains("active")){
            return false;
        }
        const leastNavActive = AppUtils.getElement("#header .nav a.active");
        if (leastNavActive || leastNavActive.classList || leastNavActive.classList.length) {
            leastNavActive.classList.remove("active");
        }
        this.setState({ menuTag: AppUtils.attr(event.target, "href").replace("#", "") });
    },
    render: function () {
        const HeaderProps = {
            handleClick: this.handleMenu,
            menuTag: this.state.menuTag
        }
        const RootContentProps = {
            menuTag: this.state.menuTag
        }
        return (<div>
            <Header {...HeaderProps} />
            <div id="content">
                <RootContent {...RootContentProps} />
            </div>
        </div>);
    }
});

