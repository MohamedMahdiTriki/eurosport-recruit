import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { Suspense } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
})
ReactDOM.createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
        <ThemeProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </ThemeProvider>
    </ApolloProvider>
)
