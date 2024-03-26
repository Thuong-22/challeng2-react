import React, { Children } from "react";

export const styles = {
    mainColor: "#333333",
    lighterColor: "#828282",
    blue: "#2962FF",
    red: "#D32F2F",
    disabledColor: "#F2F2F2",
    disabledBorderColor: "#E0E0E0",
    size: {
        sm:"40px",
        md:"56px",
        fullWidth: "100%"
    }

} 

export function HelpText({
    helperText = "Some interesting text",
    helpTextColor
}) {
    return (
        <span className="help-text" style={{ color: helpTextColor }}>
            {helperText}
        </span>
    )
}

function Icon({ icon }) {
    return (
        <span className="material-icons input-icon">
            {icon}
        </span>
    )
}


function Input({
    text =/*#__PURE__*/"<Input />",
    pColor = styles.mainColor,

    lbColor = styles.mainColor,

    brColor = styles.lighterColor,

    bgColor = "#ffffff",
    sizeHeight =  styles.size.md ,
    sizeWidth= "200px",
    value,
    visibleFlag = false,
    reverseFlag = false,
    hasTextArea = false,
    icon,
    children
}) {

    let pStyle = { color: pColor }

    let labelStyle = { color: lbColor }

    let inputStyle =
    {
        borderColor: brColor,
        backgroundColor: bgColor,
        paddingLeft: visibleFlag ? (reverseFlag? '12px' : '30px'):'12px',
        height: sizeHeight,
        width: sizeWidth,
        display: hasTextArea?'none':"block"
    }

    let iconStyle = {
        display: visibleFlag ? 'inline-block' : 'none'
    }

    if (reverseFlag) {
        iconStyle.right = '12px';
      }
      else {
        iconStyle.left = '12px';
      }

    return (
        <div className="inputcomponent">
            <p style={pStyle}>{text}</p>
            <label style={labelStyle}>Label</label>
            <div className="input-with-icon">
                <span style={iconStyle} className="material-icons input-icon">
                    {icon}
                </span>
                <input style={inputStyle} placeholder="Placeholder" value={value}></input>

            </div>
            {children}
        </div>

    )
}


export default Input;
