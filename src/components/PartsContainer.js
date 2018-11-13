import React from 'react';
import PartsElm from './PartsElm';
// import { NavLink } from 'react-router-dom'

const PartsContainer = ({ partsList, actions }) => {
    return (
        <div className={"partsContainer"}>
            {partsList.map(parts => { 
                return <PartsElm
                    key={parts.idx}
                    parts={parts}
                    onClick={() => actions.onPartsClick(parts.idx)} />
            })}
            {/* <div>
                Show:{' '}
                <FilterLink filter="SHOW_ALL">All</FilterLink>{', '}
                <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{', '}
                <FilterLink filter="SHOW_COMPLETED">Active</FilterLink>{', '}
            </div> */}
        </div>
    )
};

// const FilterLink = ({ filter, children }) => (
//     <NavLink
//       to={filter === 'SHOW_ALL' ? '/' : `/${ filter }`}
//       activeStyle={{
//         textDecoration: 'none',
//         color: 'black'
//       }}
//     >
//       {children}
//     </NavLink>
// )  

export default PartsContainer;

