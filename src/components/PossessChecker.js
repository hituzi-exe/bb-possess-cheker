import React from 'react';
import SideMenu from './SideMenu';
import PartsHeader from './PartsHeader';
import PartsContainer from './PartsContainer';
import PossessURL from './PossessURL';

const PossessChecker = ({ possessChecker, actions }) => {
    const { items, title } = possessChecker.menuList.find(m => m.isSelected);

    return (
        <div className='PossessCheckerWrapper'>
            <div className='PossessChecker'>
                <SideMenu menuList={possessChecker.menuList} actions={actions} />
                <div className='content'>
                    <PartsHeader title={title} partsList={items} />
                    <PartsContainer partsList={items} actions={actions}/>
                </div>
            </div>
            <PossessURL menuList={possessChecker.menuList} />
        </div>
    );
}

export default PossessChecker;
