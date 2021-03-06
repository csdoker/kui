import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import omit from "object.omit";

const prefixCls = "k-form";

class Form extends Component {
    static propTypes = {
        mode: PropTypes.oneOf(["horizontal", "vertical", "inline"]),
        onSubmit: PropTypes.func
    };
    static defaultProps = {
        mode: "horizontal"
    };
    renderChildren() {
        const { children } = this.props;
        return React.Children.map(children, child => {
            if (child && child.type && child.type.displayName == "FormItem") {
                return child;
            }
            return null;
        });
    }
    render() {
        const { className, style, mode } = this.props;
        const classString = classnames(
            {
                [prefixCls]: true,
                [`${prefixCls}--${mode}`]: mode
            },
            className
        );

        return (
            <form
                className={classString}
                style={style}
                onSubmit={this.handleSubmit}
            >
                {this.renderChildren()}
            </form>
        );
    }

    handleSubmit = e => {
        const { onSubmit } = this.props;
        if (onSubmit) {
            return onSubmit(e);
        }
        return true;
    };
}

export default Form;
