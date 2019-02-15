import React, { Component } from "react";
import { DatePicker } from "main";
import { addMonths } from "date-fns";
import { getLastDay } from "../../../src/utils/dateUtils";

const { RangePicker } = DatePicker;

export default class Basic extends Component {
    handleChange = date => {
        console.log(date);
    };
    render() {
        return (
            <React.Fragment>
                <DatePicker
                    onChange={this.handleChange}
                    placeholder="请选择日期"
                    minDate={new Date()}
                    maxDate={getLastDay(addMonths(new Date(), 1))}
                />
                <br />
                <RangePicker
                    minDate={new Date()}
                    maxDate={getLastDay(addMonths(new Date(), 1))}
                />
            </React.Fragment>
        );
    }
}
