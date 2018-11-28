import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import PossessURL from '../components/PossessURL';
//import AssemblyAdjuster from '../components/AssemblyAdjuster';

class AssemblyAdjusterContainer extends Component {
    render() {
        const { possessChecker } = this.props;
        return (
            <PossessURL menuList={possessChecker.menuList} />
        );
    }
}

const mapStateToProps = (state) => ({
    AssemblyAdjuster: state.AssemblyAdjuster,
    possessChecker: state.possessChecker,
});

const mapDispach = (dispach, ownProps) => ({
    actions: bindActionCreators(actions, dispach),
});

export default connect(mapStateToProps, mapDispach)(AssemblyAdjusterContainer);
