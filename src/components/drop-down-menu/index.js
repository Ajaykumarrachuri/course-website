import React from 'react'
import protoTypes from 'prop-types'
import classnames from 'classnames'
import { IoMdArrowDropdown } from "react-icons/io";
import {
    Menu,
    MenuItems,
    MenuButton,
    MenuItem,
    MenuPopover,
} from "@reach/menu-button";

const DropDownMenu = (props) => {
    const {
        id,
        title,
        menuList,
        className,
        ...compProps
    } = props;

    const getToggleSvg = (isExpanded) => {
        return (
            <div className={classnames('transform transition-all duration-500', {
                'rotate-0': !isExpanded,
                '-rotate-180': isExpanded
            })}>
                <IoMdArrowDropdown size={24} />
            </div>
        );
    }

    return (
        <div id={id} className={className} {...compProps}>
            <Menu className='relative'>
                {({ isExpanded }) => (
                    <React.Fragment>
                        <MenuButton className='flex items-center'>
                            <span className={classnames('hover:text-text-hover px-1',
                                { 'font-bold': isExpanded })}>
                                {title}
                            </span>
                            <span aria-hidden>{getToggleSvg(isExpanded)}</span>
                        </MenuButton>
                        <MenuPopover className={classnames('absolute z-50 px-6 pt-6 pb-2 bg-white border border-solid border-border-primary', {
                            'animate-rollout': !isExpanded,
                            'animate-rollin': isExpanded
                        })}>
                            <MenuItems>
                                {menuList.map((value, index) => {
                                    return (
                                        <MenuItem key={index} className='cursor-pointer pb-4 hover:text-text-hover' onSelect={value.onSelect}>{value.label}</MenuItem>
                                    )
                                })}
                            </MenuItems>
                        </MenuPopover>
                    </React.Fragment>
                )}
            </Menu>
        </div >
    );
}

DropDownMenu.proptypes =
{
    id: protoTypes.string,
    title: protoTypes.string,
    menuList: protoTypes.arrayOf(protoTypes.object),
    className: protoTypes.string,
};

export default DropDownMenu;