import PropTypes from 'prop-types';
import Button from "../../../shared/Button/Button";

const FeedbackOptions = ({onLeaveFeedback, options}) => 
{
    const elements = options.map(name =>
        <div key={name}>
        <Button onClick={() => onLeaveFeedback(name)} type="button">{name}</Button>
        </div>)
   return (
        <>
           {elements}
        </>
    )
}


FeedbackOptions.propTypes= {
   options: PropTypes.arrayOf(PropTypes.string).isRequired,
   onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;