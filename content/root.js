
const RootContent = React.createClass({
    propTypes: {
    },
    getInitialState: function () {
        return {
            homeData: {},
            doorData: {},
            mirrorData: {
                navTag: 0
            },
            repositoryData: {
                navTag: 0
            }
        };
    }, 
    handleHomeState({homeData}){
        this.setState({homeData});
    },
    handleDoorState({doorData}){
        this.setState({doorData});
    },
    handleMirrorState({mirrorData}){
        this.setState({mirrorData});
    },
    handleRepositoryState({repositoryData}){
        this.setState({repositoryData});
    },
    render: function () {
        const {menuTag} = this.props;
        const commonProps = {
            faState: this.state
        };
        const homeProps = {
            setFaState: this.hendleHomeState,
            ...commonProps
        };
        const doorProps = {
            setFaState: this.handleDoorState,
            ...commonProps
        };
        const mirrorProps = {
            setFaState: this.handleMirrorState,
            ...commonProps
        };
        const repositoryProps = {
            setFaState: this.handleRepositoryState,
            ...commonProps
        };
        switch (menuTag) {
            case "repository": return (<RepositoryContent {...repositoryProps} />);
            case "mirror": return (<MirrorContent {...mirrorProps} />);
            case "door": return (<DoorContent {...doorProps} />);
            default: return (<HomeContent {...homeProps} />);
        } 
    }
});

