import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import SearchProvider from './Provider/SearchProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Provider store={store}>
			<SearchProvider>
				<App />
			</SearchProvider>
		</Provider>
	</BrowserRouter>
)
