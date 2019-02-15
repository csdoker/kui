import React, { Component } from "react";
import { DatePicker } from "main";

const { RangePicker, YearPicker, MonthPicker, WeekPicker } = DatePicker;

export default class Size extends Component {
    handleChange = date => {
        console.log(date);
    };
    render() {
        return (
            <React.Fragment>
                <DatePicker
                    onChange={this.handleChange}
                    kSize="sm"
                    placeholder="请选择日期"
                />
                <br />
                <DatePicker
                    onChange={this.handleChange}
                    placeholder="请选择日期"
                />
                <br />
                <DatePicker
                    onChange={this.handleChange}
                    kSize="lg"
                    placeholder="请选择日期"
                />
            </React.Fragment>
        );
    }
}
