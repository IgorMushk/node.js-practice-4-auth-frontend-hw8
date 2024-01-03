//import { Button, Item, ItemText, List, Quantitas } from "./ContactList.styled.";
import { Button, Item, ItemText, List } from "./ContactList.styled.";
import { useDispatch, useSelector } from 'react-redux';
//import { delClient } from "redux/store";
import { deleteContact } from "redux/contacts/operations";
//import { getContacts, getFilterValue, getIsLoading } from "redux/contacts/selectors";
import { getContacts, getFilterValue } from "redux/contacts/selectors";
//import { RotatingLines } from 'react-loader-spinner';

export const ContactList = ({onDeleteContact}) => {
  const contacts  = useSelector(getContacts)
  //console.log('ContactList-contacts :>>', contacts)
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  //console.log('ContactList-filter :>>', filterValue);
  //const isLoading = useSelector(getIsLoading)

  const getFilteredContats = () => {
    const filteredContats = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    return filteredContats;
  };

  // const quantitas = getFilteredContats().length;

 return  (
  <>
<List>
{getFilteredContats().map(({id, name, number}) => (
<Item key={id}>
    <ItemText><span>{name} : </span><span>{number}</span> </ItemText>
    <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button> </Item>
    ))}
</List>
{/* <Quantitas>
        Number of contacts:
        {isLoading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="18"
            visible={true}
          />
        ) : (
          <span>{quantitas}</span>
        )}
      </Quantitas> */}
</>
)};//

