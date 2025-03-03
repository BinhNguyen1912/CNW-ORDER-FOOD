import { createContext, ReactNode, useState } from 'react'
import { User } from 'src/types/user.type'
import { getAccessFromLS, getProfile } from 'src/Until/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
  openSlideBar: boolean
  setOpenSlideBar: React.Dispatch<React.SetStateAction<boolean>>
}

// Giá trị mặc định
const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessFromLS()),
  setIsAuthenticated: () => null, // Tránh lỗi khi chưa có Provider
  profile: getProfile(),
  setProfile: () => null,
  openSlideBar: false,
  setOpenSlideBar: () => null
}
export const AppContext = createContext<AppContextInterface>(initialAppContext)

// Tạo Context

// Provider
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  const [openSlideBar, setOpenSlideBar] = useState<boolean>(initialAppContext.openSlideBar)
  return (
    <AppContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, profile, setProfile, openSlideBar, setOpenSlideBar }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default AppProvider
