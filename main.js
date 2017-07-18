/**
 * Created by rongzhx on 2017/7/2.
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom'

import NavMenu from './src/menu'
import { Menu, Button } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class Root extends Component {
    constructor (props) {
        super (props);
    }

    parseMenuData = (menuData) => {
        return menuData.map((menuItem) => {
            if(menuItem.dtos.length == 0){
                return <MenuItem key={menuItem.id}>{menuItem.name}</MenuItem>;
            }
            return <SubMenu key={menuItem.id} title={menuItem.name}>{ this.parseMenuData(menuItem.dtos) }</SubMenu>;
        });
    }

    render () {
        return (
            <div className="container" style={{ height:'100%' }}>
                <div style={{ width:200, height:'100%' }}>
                    <Menu theme='dark' mode='inline' style={{ height:'100%' }}>
                        { this.parseMenuData(NavMenu) }
                    </Menu>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Root />,
    document.getElementById('app')
);