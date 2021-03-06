import React, { Component } from "react";
import Basic from "./Basic";
import DocMark from "../DocMark";
import docs from "./docs";

class PaginationView extends Component {
    render() {
        return (
            <div>
                <h1>Pagination 分页</h1>
                <div className="k-example">
                    <Basic />
                    <DocMark source={docs.Basic} />
                </div>
                <h1>API</h1>
                <table className="k-example-table k-example-table-hover k-example-table-striped">
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>total</td>
                            <td>总记录数</td>
                            <td>number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>pageSize</td>
                            <td>分页大小</td>
                            <td>number</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>pageNumber</td>
                            <td>当前页</td>
                            <td>number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>jumpNumber</td>
                            <td>双箭头跳页数</td>
                            <td>number</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>kStyle</td>
                            <td>
                                风格，可选值 'primary' 'info' 'success'
                                'warning' 'danger'
                            </td>
                            <td>string</td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td>kSize</td>
                            <td>大小，可选值 'xs' 'sm' 'lg' </td>
                            <td>string</td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>改变页码时的回调函数</td>
                            <td>Function(pageIndex:number)</td>
                            <td>()=>{}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PaginationView;
