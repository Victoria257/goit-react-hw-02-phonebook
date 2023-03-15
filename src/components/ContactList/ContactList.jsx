import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, delContact, children }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {children}
      <ul className={css.contactsList}>
        {contacts.map(({ id, name, number }) => (
          <Contact
            id={id}
            name={name}
            number={number}
            key={id}
            delContact={delContact}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  delContact: PropTypes.func,
  children: PropTypes.object,
};

export default ContactList;
