import { createContext, ReactNode, useState } from 'react'
import { User } from 'src/types/user.type'
import { getAccessFromLS, getProfile } from 'src/Until/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
}

// Giá trị mặc định
const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessFromLS()),
  setIsAuthenticated: () => null, // Tránh lỗi khi chưa có Provider
  profile: getProfile(),
  setProfile: () => null
}
export const AppContext = createContext<AppContextInterface>(initialAppContext)

// Tạo Context

// Provider
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, profile, setProfile }}>
      {children}
    </AppContext.Provider>
  )
}
export default AppProvider
