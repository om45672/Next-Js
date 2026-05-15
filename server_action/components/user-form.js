import { createUser } from '@/actions'
import React from 'react'

const UserForm = () => {
  return (
      <form action={createUser}>
          <input name='name' placeholder='Jonh doe' />
          <button type="submit">Create</button>
    </form>
  )
}

export default UserForm