import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import PartsElm from '../components/PartsElm';

class PossessCheckerContainer extends Component {
    render() {
        const { possessChecker, actions } = this.props;

        return (
            <div className={"partsContainer"}>
                {possessChecker.partsList.map(d => { 
                    return <PartsElm
                        key={d.idx}
                        name={d.name}
                        count={d.count}
                        onClick={() => actions.onPartsClick(d.idx)} />
                })}
            </div>
        );
    }
}

const mapState = (state, ownProps) => ({
    possessChecker: state.possessChecker,
});

const mapDispach = (dispach) => ({
    actions: bindActionCreators(actions, dispach),
});

export default connect(mapState, mapDispach)(PossessCheckerContainer);
