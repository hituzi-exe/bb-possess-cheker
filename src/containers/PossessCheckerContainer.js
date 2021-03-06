import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import PossessChecker from '../components/PossessChecker';
import { initialAppStateByParam } from '../reducers/possessChecker';

class PossessCheckerContainer extends Component {
    //TODO 非推奨メソッド,UNSAFE_componentWillMountに変更すること
    //https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
    componentWillMount = () => {
        const params = new URLSearchParams(this.props.location.search);
        const param = params.get('param');
        initialAppStateByParam(param);
    };

    //TODO 非推奨メソッド,UNSAFE_componentWillReceivePropsに変更すること
    componentWillReceiveProps = nextProps => {
        // componentWillReceivePropsが無限に呼び出されるのを防ぐ
        if (nextProps.location !== this.props.location) {
            const params = new URLSearchParams(nextProps.location.search);
            const param = params.get('param');
            initialAppStateByParam(param);
        }
    };

    render() {
        const { possessChecker, actions } = this.props;

        return (
            <PossessChecker possessChecker={possessChecker} actions={actions} />
        );
    }
}

const mapStateToProps = (state) => ({
    possessChecker: state.possessChecker,
});

const mapDispach = (dispach, ownProps) => ({
    actions: bindActionCreators(actions, dispach),
    push: (param) => {
        const { location, history } = ownProps;
        const params = new URLSearchParams(location.search);
        params.set('param', param);

        history.push({
            search: params.toString(),
        });
    },
});

export default connect(mapStateToProps, mapDispach)(PossessCheckerContainer);
