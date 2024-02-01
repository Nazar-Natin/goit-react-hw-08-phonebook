import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectToken } from "store/auth/selectorsAuth";
import { selectError, selectLoading } from "store/contacts/selectorsContacts";
import { fetchContactsThunk } from "store/contacts/operationsContact";

export const Contacts = () => {
    const dispatch = useDispatch();

    const token = useSelector(selectToken);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContactsThunk(token));
    }, [token, dispatch]);

    return (
        <div>
            <h2>Phonebook</h2>
            {isLoading && <Loader />}
            {error && <p>Something wrong...</p>}
            <ContactForm />
            <Filter />
            <ContactList />
        </div>
    )
};