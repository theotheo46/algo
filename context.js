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