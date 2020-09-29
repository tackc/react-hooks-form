import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

export function PhoneBookForm({ contacts, setContacts }) {
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      handleChange(event);
    }
  }

  const handleChange = (event, contacts) => {
    // event.persist();
    setContacts(contacts => ({...contacts, [event.target.name]: event.target.value}));
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        value={ contacts.userFirstname }
        onChange={handleChange}
        placeholder='Coder'
        type='text'
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname' 
        onChange={handleChange}
        name='userLastname' 
        value={ contacts.userLastname }
        placeholder='Byte'
        type='text' 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        value={ contacts.userPhone }
        onChange={handleChange}
        placeholder='888-555-1212'
        type='text'
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({contacts}) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {console.log(contacts)}
        {contacts.map(contact => {
          return(
            <tr key={contact}>
              <td>{contact.userFirstname}</td>
              <td>{contact.userLastname}</td>
              <td>{contact.userPhone}</td>
            </tr>
          )}
        )}
      </tbody>
    </table>
  );
}

function App(props) {
  const placeholderState = {
    userFirstname: 'Test',
    userLastname: 'One',
    userPhone: '5558675309',
  };
  const [contacts, setContacts] = useState([placeholderState]);

  return (
    <section>
      {/* {handleSubmit, handleChange, inputs} */}
      <PhoneBookForm contacts={ contacts } setContacts={ setContacts } />
      <InformationTable contacts={ contacts }/>
    </section>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
