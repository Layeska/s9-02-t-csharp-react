import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../features/auth/auth.Slice'

export const useAuth = () => {
  const user = useSelector(selectCurrentUser)
  const givenname = user?.givenname;

  return useMemo(() => ({ user,givenname }), [user,givenname])
}
