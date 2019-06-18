import gql from 'graphql-tag'
import { MutationResolvers, QueryResolvers } from '../../generated/graphql'

const postsQuery = gql`
    query getPosts {
        posts @rest(type: "Get", path: "posts") {
            id
            title
        }
    }
`

const resolvers = {
    Mutation: {},
    Query: {
        getPosts: (parent, args, { cache }) => {
            const { posts } = cache.readQuery<any>({
                query: postsQuery
            })

            return posts
        }
    }
} as {
    Query: QueryResolvers
    Mutation: MutationResolvers
}

export default resolvers
