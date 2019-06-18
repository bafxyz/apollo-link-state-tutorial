import gql from 'graphql-tag'
import * as React from 'react'
import { useQuery } from 'react-apollo-hooks'

interface Props {}

export const DirectQuery: React.FC<Props> = () => {
    const { data, loading } = useQuery(
        gql`
            query GetPostsAndClient {
                count @client
                posts @rest(type: "Get", path: "posts") {
                    id
                    title
                }
            }
        `
    )

    console.log('DirectQuery data: ', data)

    // true until slowest query is fetched
    if (loading) {
        return <div>...loading</div>
    }

    return (
        <div>
            <h1>Client Query</h1>
            <div>count {data.count}</div>
            <div>First post id : {data.posts[0].id}</div>
        </div>
    )
}
