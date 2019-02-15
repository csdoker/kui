import React, { Component } from "react";
import { Dropdown, Menu, Message } from "main";

const menu = (
    <Menu>
        <Menu.Item id="1">选项1</Menu.Item>
        <Menu.Item id="2">选项2</Menu.Item>
        <Menu.Item id="3">选项3</Menu.Item>
        <Menu.Item id="4">选项4</Menu.Item>
        <Menu.SubMenu id="1-1" title={<span>子菜单</span>}>
            <Menu.Item id="5">子菜单1</Menu.Item>
            <Menu.Item id="6">子菜单2</Menu.Item>
        </Menu.SubMenu>
    </Menu>
);

export default class Button extends Component {
    handleButtonClick = () => {
        Message.info("点击了下拉菜单左侧按钮！");
    };
    render() {
        return (
            <React.Fragment>
                <Dropdown.Button menu={menu} onClick={this.handleButtonClick}>
                    下拉菜单
                </Dropdown.Button>
            </React.Fragment>
        );
    }
}
