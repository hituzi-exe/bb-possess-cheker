import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import PossessURL from '../components/PossessURL';
//import PossessChecker from '../components/PossessChecker';

class HomeContainer extends Component {
    render() {
        const { possessChecker } = this.props;
        
        return (
            <PossessURL menuList={possessChecker.menuList} />
        );
    }
}

const mapStateToProps = (state) => ({
    paramString: state.param,
    possessChecker: state.possessChecker,
});

const mapDispach = (dispach, ownProps) => ({
    actions: bindActionCreators(actions, dispach),
});

export default connect(mapStateToProps, mapDispach)(HomeContainer);
