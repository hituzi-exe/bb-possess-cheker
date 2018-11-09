import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import PartsElm from '../components/PartsElm';
import PartsHeader from '../components/PartsHeader';

class PossessCheckerContainer extends Component {
    render() {
        const { possessChecker, actions } = this.props;

        return (
            <div>
                <div className={"partsHeader"}>
                    <PartsHeader partsList={possessChecker.partsList} />
                </div>
                <div className={"partsContainer"}>
                    {possessChecker.partsList.map(parts => { 
                        return <PartsElm
                            key={parts.idx}
                            parts={parts}
                            onClick={() => actions.onPartsClick(parts.idx)} />
                    })}
                </div>
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
