const Mainframe = (props) =>{
    const classes = props.className;
    return <main className={classes}>{props.children}</main>
}

export default Mainframe;