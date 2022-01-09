import React, {memo} from "react";
import { connect } from "react-redux";

const My = () => {

    return (
        <>
        MY
        </>
    )
}

const mapStateToProps = () => {
    return {
        
    }
}

export default connect(mapStateToProps, {})(memo(My))