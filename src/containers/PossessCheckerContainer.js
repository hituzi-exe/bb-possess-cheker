import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import PartsElm from '../components/PartsElm';

class PossessCheckerContainer extends Component {
    render() {
        const { possessChecker, actions } = this.props;
        const partsList = [
            {"idx": 1, "name": "M90"},
            {"idx": 2, "name": "M91"}
        ];

        return (
            
            <div>
                {partsList.map(d => { 
                    return <li>{d.name}</li>
                })}
                
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
