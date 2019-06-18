import { RestLink } from 'apollo-link-rest'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
import ReactDOM from 'react-dom'
import App from './App'
import { resolvers } from './graphql/resolvers'
import * as serviceWorker from './serviceWorker'

const restLink = new RestLink({
    uri: 'https://jsonplaceholder.typicode.com/'
    // responseTransformer: async response => response.json().then(({ data }) => data)
})

const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
    resolvers: resolvers as any
})

const initData = () =>
    client.writeData({
        data: {
            count: 2
        }
    })

initData()

// client.resetStore()
client.onResetStore(async () => {
    initData()
})
// client.clearStore()
client.onClearStore(async () => {
    initData()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
