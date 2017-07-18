/**
 * Created by rongzhx on 2017/7/4.
 * 先手动构建菜单，
 * 后边应改为通过读取所有路由，动态的构建出菜单
 * 菜单最多3级
 */
import React from 'react'
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const menuData = [
    {
        id:1,
        name:'name',
        parentId:0,
        dateType:'dataType',
        dtos:[
            {
                id:11,
                name:'name1',
                parentId:1,
                dateType:'dataType1',
                dtos:[
                    {
                        id:111,
                        name:'name11',
                        parentId:11,
                        dateType:'dataType11',
                        dtos:[]
                    }
                ]
            },
            {
                id:12,
                name:'name2',
                parentId:1,
                dateType:'dataType2',
                dtos:[]
            }
        ]
    }
];

function parseMenuData (menuData) {
    menuData.map((menuItem) => {
        if(menuItem.dtos.length == 0){
            return <MenuItem key={menuItem.id}>{menuItem.name}</MenuItem>;
        }
        return <SubMenu key={menuItem.id} title={menuItem.name}>{ parseMenuData(menuItem.dtos) }</SubMenu>;
    });
}

const NavMenu = <Menu theme='dark'>
    { parseMenuData(menuData) }
    </Menu>

export default menuData;