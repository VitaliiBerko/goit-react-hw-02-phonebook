import PropTypes from 'prop-types';

export const ContactListItem = ({id, name, number, onClick}) =>{
    const handleDeleteContact=()=>{
        onClick(id)
    }
    return (
        <li>
            {name} : {number}
            <button type='button' onClick={handleDeleteContact}>Delete</button>
        </li>
    )

}