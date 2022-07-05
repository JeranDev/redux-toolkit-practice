import { useDispatch, useSelector } from 'react-redux'
import { setUsername } from './redux/username'

function User() {
  const { username } = useSelector(state => state.username)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Your username is: {username}</h1>
      <input
        onChange={e => dispatch(setUsername(e.target.value))}
        type='text'
        value={username}
      />
    </div>
  )
}

export default User
