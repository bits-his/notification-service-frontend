import React, { useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router';
import EnterFace from "../EnterFace"
import Welcome from '../Welcome'
import AppIndex from '../Router/AppIndex'
import View from '../View'
function AppNavigation() {

    let element = useRoutes([
        {
            path: '/',
            element: <EnterFace />,
            children: [{ index: true },
            ]
        },
        {
            element: <AppIndex />,
            children: [
                {
                    path: '/welcome',
                    element: <Welcome />
                },
                {
                    path: '/view',
                    element: <View />
                },
            ]
            }
    ])
    return element;

}
export default AppNavigation