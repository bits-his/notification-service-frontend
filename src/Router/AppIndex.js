import React from 'react'
import { Outlet } from 'react-router'

export default function AppIndex() {
    return (
        <div>
            <Outlet/>
        </div>
    )
}
