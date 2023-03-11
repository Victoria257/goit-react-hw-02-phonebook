import { Component } from "react";

class FilterContacts extends Component {
    render() {
        const {filter, onChange} = this.props
        return (
            <div>
                <h3>Find contacts by name</h3>
              <input
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

