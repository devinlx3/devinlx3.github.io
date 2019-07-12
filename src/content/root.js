import React from 'react';
import Grid from '@material-ui/core/Grid';

import HomeContent from './home';
import DoorContent from './door';
import MirrorContent from './mirror';
import RepositoryContent from './repository';

export default class RootContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeData: {},
            doorData: {},
            mirrorData: {
                navKey: 0
            },
            repositoryData: {
                navKey: 0
            }
        }
    }
    
    handleHomeState = ({ homeData }) => {
        this.setState({ homeData });
    };
    handleDoorState = ({ doorData }) => {
        this.setState({ doorData });
    };
    handleMirrorState = ({ mirrorData }) => {
        this.setState({ mirrorData });
    };
    handleRepositoryState = ({ repositoryData }) => {
        this.setState({ repositoryData });
    };

    render() {
        const { tabVal } = this.props;
        const commonProps = {
            faState: this.state
        };
        const homeProps = {
            setFaState: this.handleHomeState,
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
        let content;
        switch (tabVal) {
            case "repository": content = (<RepositoryContent {...repositoryProps} />);break;
            case "mirror": content = (<MirrorContent {...mirrorProps} />);break;
            case "door": content = (<DoorContent {...doorProps} />);break;
            default: content = (<HomeContent {...homeProps} />);break;
        }
        return (<Grid>{content}</Grid>);
    }

}