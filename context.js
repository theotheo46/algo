export default class Input extends PureComponent {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.currentTarget.value });
  };

  render() {
    const { value } = this.state;

    return (
      <input
        value={value}
        onChange={this.handleChange}
      />
    );
  }
} 


const UserForm = props => {
  const [user, setUser] = useState(props.user)
  const form = useRef(null)

  const submit = e => {
    e.preventDefault()
    const data = new FormData(form.current)
    fetch('/api', { method: 'POST', body: data })
      .then(res => res.json())
      .then(json => setUser(json.user))
  }

  return (
    <form ref={form} onSubmit={submit}>
      <input type="text" name="user[name]" defaultValue={user.name} />
      {user.errors.name && <p>{user.errors.name}</p>}

      <input type="email" name="user[email]" defaultValue={user.email} />
      {user.errors.email && <p>{user.errors.email}</p>}

      <input type="submit" name="Sign Up" />
    </form>
  )
}

Расспространенным примером применения useRef является хранение ссылки на html-элементы внутри компонента:
      const nameField = React.useRef(null);

Последовательность будет такая: 
- создаешь контекст
- оборачиваешь компонент Форм в контекст
 <"ContextName".Provider>
   <Form>
      <Field/>
    </Form>
</"ContextName".Provider>
- прокидываешь в контекст стейт и его сеттер 
const [fieldState, setFieldState] = useState()
 <"ContextName".Provider value={{fieldState, setFieldState}} >
   <Form>
      <Field/>
    </Form>
</"ContextName".Provider>
- в Форм берешь стейт
const {fieldState} = useContext("ContextName")
- в Филд берешь сеттер стейта
const {setFieldState} = useContext("ContextName"
- и дальше прописываешь логику того как добавлять стейт в Филд и как использовать этот стейт в Форм


state example for hook

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

state example for React class

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}


// AppContext.js
import React from 'react';
// Создаём контекст в отдельном файле, чтобы его можно было импортировать там, где он понадобится
export const AppContext = React.createContext();

// App.jsx
// Импортируем контекст
import { AppContext } from './AppContext'

function App() {
  const appData = {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
  };

  return <div className="AppWrapper">
    {/* Рисуем компонент AppContext.Provider, и в пропс value кладём данные */}
    <AppContext.Provider value={appData}>
      {/* Больше ничего не передаём в Header */}
      <Header />
    </AppContext.Provider>
  </div>;
}

// Header.jsx
// Больше не принимаем пропсов в Header
function Header() {
  return <div className="Header">
    {/* Больше не передаём ничего в User */}
    <User />
  </div>;
}

// User.jsx
// Здесь будем использовать контекст, импортируем его
import { AppContext } from './AppContext';
// Больше не принимаем пропсов в User
function User() {
  return <div className="User">
        {/* вместо пропсов рисуем компонент AppContext.Consumer */}
    <AppContext.Consumer>
      {
        appData => <>
          <Avatar source={appData.avatar}/>
        </>
      }
    </AppContext.Consumer>
  </div>
}

// Avatar.jsx
function Avatar({ source }) {
  return <div className="Avatar">
    <img src={source} alt="avatar" />
  </div>
}