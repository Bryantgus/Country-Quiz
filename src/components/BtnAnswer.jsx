import PropTypes from "prop-types"

export default function BtnAnswer(props) {
    return (
        <div className="answerComponent">
            <span>{props.answer}</span>
        </div>
    )
}

BtnAnswer.propTypes = {
    answer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,])
}