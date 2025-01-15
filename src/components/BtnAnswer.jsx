import PropTypes from "prop-types"

export default function BtnAnswer(props) {
    return (
        <span onClick={() => props.}>{props.answer}</span>
    )
}

BtnAnswer.propTypes = {

}