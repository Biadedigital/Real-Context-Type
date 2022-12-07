import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import ThemeContext from "./themeContext"
    const {Provider, Consumer} = ThemeContext

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider value={"dark"}>
        <App />
    </Provider>, 
	</React.StrictMode>
)
