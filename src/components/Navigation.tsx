import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router'
import BasicForm from './BasicForm'
import RegisterForm from './RegisterForm'
import HookForm from './HookForm'

const Navigation = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/basicform" end>
              Basic Form (formik v1)
            </NavLink>
          </li>
          <li>
            <NavLink to="/registerform" end>
              Register Form (formik v2)
            </NavLink>
          </li>
          <li>
            <NavLink to="/hookform" end>
              React Hook Form
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/basicform" element={<BasicForm />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/hookform" element={<HookForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
