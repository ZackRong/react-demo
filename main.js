/**
 * Created by rongzhx on 2017/7/2.
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom'

import NavMenu from './src/menu'
import {Menu} from "antd";
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class Root extends Component {
    constructor (props) {
        super (props);
    }

    parseMenuData = (menuData) => {
        menuData.map((menuItem) => {
            if(menuItem.dtos.length == 0){
                return <MenuItem key={menuItem.id}>{menuItem.name}</MenuItem>;
            }
            return <SubMenu key={menuItem.id} title={menuItem.name}>{ this.parseMenuData(menuItem.dtos) }</SubMenu>;
        });
    }

    render () {
        return (
            <div className="container">
                <Menu theme='dark'>
                    { this.parseMenuData(NavMenu) }
                </Menu>
            </div>
        )
    }
}
ReactDOM.render(
    <Root />,
    document.getElementById('app')
);