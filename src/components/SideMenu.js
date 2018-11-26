import React from 'react';

const SideMenu = ({ menuList, actions }) => {
    return (
        <div className={'menu'}>
            {menuList.map(menu => { 
                return <SideMenuItem
                    key={menu.menuType}
                    menu={menu}
                    onClick={() => actions.onMenuClick(menu.menuType)} />
            })}
        </div>
    )
};

const SideMenuItem = ({menu, onClick}) => (
    <div
        className={`menu__item ${menu.isSelected ? 'menu__item_state_current' : ''}`}
        onClick={onClick}>
        <span>{menu.title}</span>
    </div>
)

export default SideMenu;
