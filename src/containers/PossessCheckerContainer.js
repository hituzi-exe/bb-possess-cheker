import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import PossessChecker from '../components/PossessChecker';

class PossessCheckerContainer extends Component {
    render() {
        const { possessChecker, match, actions } = this.props;
        const param = match.params.param;
        
        //http://localhost:3000/hogehoge でparamに"hogehoge"がはいる
        console.debug(param);
        
        return (
            <PossessChecker possessChecker={possessChecker} actions={actions} />
        );
    }
}

const mapState = (state, ownProps) => ({
    possessChecker: state.possessChecker,
    match: ownProps.match,
});

const mapDispach = (dispach) => ({
    actions: bindActionCreators(actions, dispach),
});

export default connect(mapState, mapDispach)(PossessCheckerContainer);
