/**
 * Created by rongzhx on 2017/7/4.
 * 先手动构建菜单，
 * 后边应改为通过读取所有路由，动态的构建出菜单
 * 菜单最多3级
 */

import { Menu } from 'antd';


const menu = {
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
            dtos:[]
        }
    ]
};

export default menu;