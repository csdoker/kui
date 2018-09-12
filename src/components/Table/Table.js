import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";
import Loading from "../Loading";
import Pagination from "../Pagination";

const prefixCls = "k-table";

class Table extends Component {
    static propTypes = {
        bordered: PropTypes.bool,
        columns: PropTypes.array,
        checkbox: PropTypes.bool,
        data: PropTypes.array,
        defaultExpandedRowIds: PropTypes.array,
        expandedRowIds: PropTypes.array,
        expandedRowRender: PropTypes.func,
        fixedHeader: PropTypes.bool,
        footer: PropTypes.object,
        indentSize: PropTypes.number,
        loading: PropTypes.bool,
        pagination: PropTypes.object,
        scroll: PropTypes.object,
        showHeader: PropTypes.bool,
        title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        onChange: PropTypes.func,
        onExpand: PropTypes.func
    };
    static defaultProps = {
        bordered: false,
        checkbox: false,
        defaultExpandedRowIds: [],
        fixedHeader: false,
        showHeader: true
    };
    init(props = this.props) {
        const { children, columns } = this.props;
        // let headerRows = [[]],
        //     colspan = 1,
        //     rowspan = 1,
        //     level = 1,
        //     loop;
        // if (children) {
        //     loop = function(children, parent) {
        //         React.Children.map(children, (child, index) => {
        //             if (child.props.children) {
        //                 loop(child.props.children, child);
        //             }
        //         });
        //     };
        //     loop(children, null);
        // } else if (columns) {
        //     loop = function(children, paernt) {
        //         children.forEach(item => {
        //             if (item.children) {
        //                 loop(item.children, item);
        //             }
        //         });
        //     };
        //     loop(columns, null);
        // }
    
    }
    componentWillMount() {
        this.init();
    }
    componentWillReceiveProps(nextProps) {
        this.init(nextProps);
    }
    renderHeader() {
        //const { children, columns } = this.props;
    }
    renderBody() {}
    render() {
        const { columns, pagination, bordered, children } = this.props;
        let classString = classnames({
            [prefixCls]: true,
            [`${prefixCls}-bordered`]: bordered
        });
        return (
            <Loading>
                <div className={classString}>
                    <div className={`${prefixCls}-content`}>
                        <div className={`${prefixCls}-scroll`}>
                            {this.renderHeader()}
                            {this.renderBody()}
                        </div>
                        <div className={`${prefixCls}-fixed-left`} />
                        <div className={`${prefixCls}-fixed-right`} />
                    </div>
                    {pagination ? <Pagination {...pagination} /> : null}
                </div>
            </Loading>
        );
    }
}

export default Table;
