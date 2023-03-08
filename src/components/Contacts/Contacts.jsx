import css from './Contacts.module.css'

export const Contacts = ({ contacts }) => {
    // console.log(contacts);
    return <div>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>

        <input
            type='text'
            name='text'
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
        >  
        </input>

        <ul>
            {contacts.map(({name,number,id}) => (
                <li key={id}>{name}: {number}</li>
            ))}
        </ul>
    </div>
}
