import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import omit from "object.omit";
import { kStyles, kClass, getClassSet } from "../../utils/kUtils";
import { State, PRIMARY, Sizes } from "../../utils/styleMaps";
import outline from "./outline";
import filled from "./filled";

const prefixCls = "k-icon";

class SvgIcon extends Component {
    static propTypes = {
        theme: PropTypes.oneOf(["outline", "filled"]),
        type: PropTypes.string,
        title: PropTypes.string,
        nativeColor: PropTypes.string,
        fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        onClick: PropTypes.func
    };
    static defaultProps = {
        theme: "outline",
        viewBox: "0 0 1024 1024"
    };
    renderPresetIcon() {
        const { theme, type } = this.props;
        let presetIcon;
        switch (type) {
            case "outline":
                presetIcon = outline[type];
                break;
            case "filled":
                presetIcon = filled[type];
                break;
            default:
                break;
        }
        if (presetIcon) {
            
        }
        return null;
    }
    render() {
        const {
            theme,
            children,
            className,
            fontSize,
            viewBox,
            title,
            nativeColor,
            style
        } = this.props;
        const _style = { fontSize, ...style };

        let classes = getClassSet(this.props);
        classes = classnames(classes, className);

        return (
            <svg
                className={classes}
                focusable="false"
                viewBox={viewBox}
                color={nativeColor}
                aria-hidden={title ? "false" : "true"}
                style={_style}
            >
                {title ? <title>{title}</title> : null}
                {this.renderPresetIcon()}
                {children}
            </svg>
        );
    }
}

const styles = State.values().concat(PRIMARY);

export default kStyles(styles, kClass(prefixCls, SvgIcon));
