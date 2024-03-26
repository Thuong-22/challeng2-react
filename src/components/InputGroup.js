import React from "react";
import Input, { HelpText, Icon, styles } from "./Input";
import TextArea from "./TextArea";

function InputGroup() {
    return (
        <>
            <div className="input-group">
                <Input />
                <Input text={/*#__PURE__*/"&:hover"}
                    pColor={styles.lighterColor}
                    brColor={styles.mainColor}
                />
                <Input text=/*#__PURE__*/"&:focus"
                    pColor={styles.lighterColor}
                    lbColor={styles.blue}
                    brColor={styles.blue}
                />
            </div>

            <div className="input-group">
                <Input text={/*#__PURE__*/"<Input error />"}
                    lbColor={styles.red}
                    brColor={styles.red}
                />
                <Input text=/*#__PURE__*/"&:hover"
                    pColor={styles.lighterColor}
                    brColor={styles.mainColor}
                />
                <Input text=/*#__PURE__*/"&:focus"
                    pColor={styles.lighterColor}
                    lbColor={styles.red}
                    brColor={styles.red}
                />
            </div>

            <div className="input-group">
                <Input text={/*#__PURE__*/"<Input disabled />"}
                    bgColor={styles.disabledColor}
                    brColor={styles.disabledBorderColor}
                />
            </div>

            <div className="input-group">
                <Input text={/*#__PURE__*/"<Input helperText=”Some interesting text” />"}  >
                    <HelpText helpTextColor={styles.lighterColor} />
                </Input>

                <Input text={/*#__PURE__*/"<Input helperText=”Some interesting text” error />"}
                    lbColor={styles.red}
                    brColor={styles.red}
                >
                    <HelpText helpTextColor={styles.red} />
                </Input>
            </div>

            <div className="input-group ">
                <Input
                    visibleFlag={true}
                    icon="phone"
                    text={/*#__PURE__*/"<Input startIcon />"} />

                <Input
                    visibleFlag={true}
                    reverseFlag={true}
                    icon="lock"
                    text={/*#__PURE__*/"<Input endIcon />"} />
            </div>

            <div className="input-group">
                <Input text={/*#__PURE__*/"<Input value=”text” />"}  
                value="Text" />
                
            </div>

            <div className="input-group">
                <Input text={/*#__PURE__*/"<Input size=”sm” />"}  
                sizeHeight={styles.size.sm}
                 />

                <Input text={/*#__PURE__*/"<Input size=”md” />"}  
                 />                
            </div>

            <div className="input-group">
                <Input  text={/*#__PURE__*/"<Input fullWidth />"}  
                value="Text"
                sizeWidth={styles.size.fullWidth} />
                
            </div>

            <div className="input-group">
                <Input text={/*#__PURE__*/"<Input multiline row=”4” />"}  
                hasTextArea={true} >
                    <TextArea rows={4} sizeHeight="150px" sizeWidth="200px">

                    </TextArea>
                </Input>
                
            </div>
        </>


    )
}

export default InputGroup;