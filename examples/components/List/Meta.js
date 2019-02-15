import React, { Component } from "react";
import { List, Icon } from "kui-react";

const data = ["List Item", "List Item", "List Item"];
const actions = [
    <Icon type="edit" theme="filled" />,
    <Icon type="delete" theme="filled" />
];

export default class Action extends Component {
    render() {
        return (
            <React.Fragment>
                <List bordered>
                    <List.Item actions={actions}>
                        <List.ItemMeta
                            avatar={<Icon type="android" fontSize={24} />}
                            title="List Item"
                            description="Description"
                        />
                    </List.Item>
                    <List.Item actions={actions}>
                        <List.ItemMeta
                            avatar={<Icon type="apple" fontSize={24} />}
                            title="List Item"
                            description="Description"
                        />
                    </List.Item>
                    <List.Item actions={actions}>
                        <List.ItemMeta
                            avatar={<Icon type="windows" fontSize={24} />}
                            title="List Item"
                            description="Description"
                        />
                    </List.Item>
                </List>
            </React.Fragment>
        );
    }
}
