import React from 'react'

const Menu = ({ menuList, actions }) => {
    return (        
        <div className={"menu"}>
            {menuList.map(menu => { 
                return <MenuItem
                    key={menu.idx}
                    menu={menu}
                    onClick={() => actions.onMenuClick(menu.idx)} />
            })}
        </div>
    )
};

const MenuItem = ({menu, onClick}) => (
    <div
        className={`menu__item ${menu.isSelected ? "menu__item_state_current" : ""}`}
        onClick={onClick}>
        <span>{menu.title}</span>
    </div>
)

export default Menu;

