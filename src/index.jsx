import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import MeetUpDetails from './pages/MeetUpDetails'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>
	},
	{
		path: "/:meetUpId",
		element: <MeetUpDetails/>
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)