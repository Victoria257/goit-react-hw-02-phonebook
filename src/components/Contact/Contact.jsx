import css from 'components/Contact/Contact.module.css';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number, delContact }) => {
  return (
    <li className={css.contact} key={id}>
      {name}: {number}
      <button
        className={css.delButton}
        type="button"
        onClick={() => delContact(id)}
      >
        delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

  delContact: PropTypes.func,
};
