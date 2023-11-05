import './App.css'
import { SimpleFooter } from './components/simple-footer'
import { TabsDefault } from './components/tabs-default'
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
function App() {
  // const client = new ApolloClient({
  //   uri: 'https://flyby-router-demo.herokuapp.com/',
  //   cache: new InMemoryCache(),
  // });
  
  return (
    <>
      <TabsDefault></TabsDefault>
      <SimpleFooter></SimpleFooter>
    </>
    
  )
}

export default App
