import { Component } from "react";
import css from './FilterContacts.module.css'

class FilterContacts extends Component {
    render() {
        const {filter, onChange} = this.props
        return (
            <div className={css.filter}> 
                <h3>Find contacts by name</h3>
                <input
                    className={css.filterInput}
                type='text'
                    name='text'
                    value={filter}
                    onChange={onChange}
                title="Name may contain only letters, apostrophe, dash and spaces."
                required
            >
                </input>
                </div>
        )
    }

}

export default FilterContacts

