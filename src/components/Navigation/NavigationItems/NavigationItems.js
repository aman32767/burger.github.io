import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItem/NavigationItem'

const navigationItems = ()=> (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/burger" >NEW BURGER</NavigationItem>
        <NavigationItem link="/burger/orders">Orders</NavigationItem>
    </ul>
)

export default navigationItems;