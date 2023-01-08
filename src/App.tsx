import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './component/Navbar'
import { Homepage } from './container/Homepage'
import Login from './container/Login'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useEffect } from 'react'
import { HomepageLogged } from './container/HomepageLogged'
import { Todo } from './container/Todo'

const queryClient = new QueryClient()



function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path='login' element={<Login />} />
          <Route path='todo' element={<Todo />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
