import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import PossessChecker from '../components/PossessChecker';
import { setParam } from '../reducers/possessChecker';

class PossessCheckerContainer extends Component {
    componentWillMount = () => {
        const params = new URLSearchParams(this.props.location.search);
        this.props.setParam(params.get('param'));
    };
    
    componentWillReceiveProps = nextProps => {
        // componentWillReceivePropsが無限に呼び出されるのを防ぐ
        if (nextProps.location !== this.props.location) {
            const params = new URLSearchParams(nextProps.location.search);
            const param = params.get('param');

            this.props.setParam(param);
        }
    };

    render() {
        const { possessChecker, actions } = this.props;
        
        return (
            <PossessChecker possessChecker={possessChecker} actions={actions} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    possessChecker: state.possessChecker,
    setParam: setParam,
});

const mapDispach = (dispach) => ({
    actions: bindActionCreators(actions, dispach),
});

export default connect(mapStateToProps, mapDispach)(PossessCheckerContainer);
