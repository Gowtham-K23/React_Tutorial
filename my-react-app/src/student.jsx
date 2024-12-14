import PropTypes from 'prop-types'
function student(props)
{
    return(
        <div className = "student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}
student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
export default student