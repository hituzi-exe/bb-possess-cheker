import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import Menu from '../components/Menu';
import PartsHeader from '../components/PartsHeader';
import PartsContainer from '../components/PartsContainer';

class PossessCheckerContainer extends Component {
    render() {
        const { possessChecker, param, actions } = this.props;
        const { items, title } = possessChecker.menuList.find(m => m.isSelected);
        
        //http://localhost:3000/hogehoge でparamに"hogehoge"がはいる
        //console.debug(param);
        
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
    param: ownProps.match.params.param,
});

const mapDispach = (dispach) => ({
    actions: bindActionCreators(actions, dispach),
});

export default connect(mapState, mapDispach)(PossessCheckerContainer);
