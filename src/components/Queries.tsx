import gql from 'graphql-tag'
import * as React from 'react'
import { useQuery } from 'react-apollo-hooks'

interface Props {}

export const Queries: React.FC<Props> = () => {
    const q1 = useQuery(
        gql`
            query GetCount {
                getCount @client
            }
        `
    )

    const q2 = useQuery(
        gql`
            query GetPosts {
                posts {
                    id
                }
            }
        `
    )
    console.log('TCL: q2', q2)

    return (
        <div>
            <h1>Queries</h1>
            <div>count: {q1.data.getCount}</div>
            <div>posts: {q2.data.getPosts}</div>
        </div>
    )
}
