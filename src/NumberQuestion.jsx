import {useState} from "react"
import PropTypes from "prop-types"

export default function NumberQuestion(props) {

    return(
        <div className="circle" style={{background: props.wasAnswer ?  "linear-gradient(#E65895, #BC6BE8)"  : "#393F6E"}}>{props.number}</div>
    )
}

NumberQuestion.propTypes = {
    wasAnswer: PropTypes.bool,
    number: PropTypes.number
}