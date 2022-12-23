import { Component } from "react";
import { ContactListItem } from "./ContactListItem/ContactListItem";


export class ContactList extends Component {

    onDeleteBtn =(id)=> {
        this.props.onClick(id)
    }

    render() {
        const { contacts } = this.props;
        return (
          <ul>
            {contacts.map(({ id, name, number }) => (
              <ContactListItem
                key={id}
                id={id}
                name={name}
                number={number}
                onClick={this.onDeleteBtn}
              />
            ))}
          </ul>
        );
      }
}