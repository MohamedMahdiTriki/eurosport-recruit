import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from 'react-redux';
import  store  from "./store/index"
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
//import { playerAction } from "store/index"

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/',
//   cache: new InMemoryCache(),
// });
// client
//   .query({
//     query: gql`
//       query GetPlayers {
//         players {
//           id
//           firstName
//           lastName
//           imageUrl
//           wins
//           losses
//           matches
//           winningGames
//           weight
//           height
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider>
        {/* <ApolloProvider client={client}> */}
        <Provider store={store}>
          <App />
        </Provider>
        {/* </ApolloProvider> */}
      </ThemeProvider>
  </React.StrictMode>,
)
