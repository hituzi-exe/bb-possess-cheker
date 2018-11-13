import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import Menu from '../components/Menu';
import PartsHeader from '../components/PartsHeader';
import PartsContainer from '../components/PartsContainer';

class PossessCheckerContainer extends Component {
    render() {
        const { possessChecker, actions } = this.props;
        const { items, title } = possessChecker.menuList.find(m => m.isSelected);

        return (
            <div className="PossessCheckerWrapper">
                <div className="PossessChecker">
                    <Menu menuList={possessChecker.menuList} actions={actions} />
                    <div className="content">
                        <PartsHeader title={title} partsList={items} />
                        <PartsContainer partsList={items} actions={actions}/>
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
