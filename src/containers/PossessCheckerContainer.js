import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import PartsElm from '../components/PartsElm';

class PossessCheckerContainer extends Component {
    render() {
        const { possessChecker, actions } = this.props;
        return (
            <div>
                <PartsElm
                    name={possessChecker.name}
                    result={possessChecker.resultValue}
                    onClick={actions.onPartsClick} />
            </div>
        );
    }
}

const mapState = (state, ownProps) => ({
    possessChecker: state.possessChecker,
});

function mapDispach(dispach) {
    return {
        actions: bindActionCreators(actions, dispach),
    };
}

export default connect(mapState, mapDispach)(PossessCheckerContainer);
