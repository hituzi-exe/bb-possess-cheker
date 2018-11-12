import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import PartsHeader from '../components/PartsHeader';
import PartsContainer from '../components/PartsContainer';

class PossessCheckerContainer extends Component {
    render() {
        const { possessChecker, actions } = this.props;

        return (
            <div className="PossessCheckerWrapper">
                <div className="PossessChecker">
                    <div className="menu">
                        <div className="menu__item menu__item_state_current"><span>武器</span></div>
                        <div className="menu__item"><span>機体パーツ</span></div>
                    </div>
                    
                    <div className="content">
                        <PartsHeader partsList={possessChecker.partsList} />
                        <PartsContainer partsList={possessChecker.partsList} actions={actions}/>
                    </div>
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
