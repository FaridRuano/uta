import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../pages/app'
import Dashboard from '../pages/dashboard/dashboard'
import Admin from '../pages/admin/admin'
import Info from '../pages/info/info'
import MyDocs from '../pages/mydocs/mydocs'

const LayoutRoutes = () => {
  return (
    <Fragment>
        <Routes>
            <Route element={<App />}>
                <Route
                    path={`${process.env.PUBLIC_URL}/inicio`}
                    element={<Dashboard/>}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/mydocs`}
                    element={<MyDocs/>}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/info`}
                    element={<Info/>}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/admin`}
                    element={<Admin/>}
                />
            </Route>
        </Routes>
    </Fragment>
  )
}

export default LayoutRoutes