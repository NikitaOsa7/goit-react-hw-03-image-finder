import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ loadMore }) => (
  <button type="button" className={s.Button} onClick={loadMore}>
    LOAD MORE
  </button>
);

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
