

function TextArea({
    rows,
    sizeHeight,
    sizeWidth
}){
    let styleTArea ={
        width: sizeWidth,
        height:sizeHeight,         
        padding:"18px 12px"
        
    }
    return(
        <textarea style={styleTArea} rows= {rows}  placeholder="Placeholder">

        </textarea>
    )
}

export default TextArea;