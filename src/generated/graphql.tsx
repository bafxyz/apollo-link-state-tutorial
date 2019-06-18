export type Maybe<T> = T | null

// ====================================================
// Documents
// ====================================================

export type GetPostsAndClientVariables = {}

export type GetPostsAndClientQuery = {
    __typename?: 'Query'

    count: Maybe<number>

    posts: Maybe<GetPostsAndClientPosts>
}

export type GetPostsAndClientPosts = {
    __typename?: 'Post'

    id: string

    title: Maybe<string>
}

export type IncrementVariables = {}

export type IncrementMutation = {
    __typename?: 'Mutation'

    increment: Maybe<number>
}

export type SetCountVariables = {
    count: number
}

export type SetCountMutation = {
    __typename?: 'Mutation'

    setCount: Maybe<number>
}

export type GetCountVariables = {}

export type GetCountQuery = {
    __typename?: 'Query'

    getCount: Maybe<number>
}

export type GetPostsVariables = {}

export type GetPostsQuery = {
    __typename?: 'Query'

    posts: Maybe<GetPostsPosts>
}

export type GetPostsPosts = {
    __typename?: 'Post'

    id: string
}

import gql from 'graphql-tag'
import * as ReactApolloHooks from 'react-apollo-hooks'

// ====================================================
// Components
// ====================================================

export const GetPostsAndClientDocument = gql`
    query GetPostsAndClient {
        count @client
        posts @rest(type: "Get", path: "posts") {
            id
            title
        }
    }
`
export function useGetPostsAndClient(baseOptions?: ReactApolloHooks.QueryHookOptions<GetPostsAndClientVariables>) {
    return ReactApolloHooks.useQuery<GetPostsAndClientQuery, GetPostsAndClientVariables>(
        GetPostsAndClientDocument,
        baseOptions
    )
}
export const IncrementDocument = gql`
    mutation Increment {
        increment @client
    }
`
export function useIncrement(
    baseOptions?: ReactApolloHooks.MutationHookOptions<IncrementMutation, IncrementVariables>
) {
    return ReactApolloHooks.useMutation<IncrementMutation, IncrementVariables>(IncrementDocument, baseOptions)
}
export const SetCountDocument = gql`
    mutation SetCount($count: Int!) {
        setCount(count: $count) @client
    }
`
export function useSetCount(baseOptions?: ReactApolloHooks.MutationHookOptions<SetCountMutation, SetCountVariables>) {
    return ReactApolloHooks.useMutation<SetCountMutation, SetCountVariables>(SetCountDocument, baseOptions)
}
export const GetCountDocument = gql`
    query GetCount {
        getCount @client
    }
`
export function useGetCount(baseOptions?: ReactApolloHooks.QueryHookOptions<GetCountVariables>) {
    return ReactApolloHooks.useQuery<GetCountQuery, GetCountVariables>(GetCountDocument, baseOptions)
}
export const GetPostsDocument = gql`
    query GetPosts {
        posts {
            id
        }
    }
`
export function useGetPosts(baseOptions?: ReactApolloHooks.QueryHookOptions<GetPostsVariables>) {
    return ReactApolloHooks.useQuery<GetPostsQuery, GetPostsVariables>(GetPostsDocument, baseOptions)
}

// ====================================================
// Types
// ====================================================

export interface Query {
    getPosts?: Maybe<Post>

    posts?: Maybe<Post>

    getCount?: Maybe<number>

    count?: Maybe<number>
}

export interface Post {
    id: string

    title?: Maybe<string>

    body?: Maybe<string>
}

export interface Mutation {
    setCount?: Maybe<number>

    increment?: Maybe<number>
}

// ====================================================
// Arguments
// ====================================================

export interface SetCountMutationArgs {
    count?: Maybe<number>
}

import { GraphQLResolveInfo } from 'graphql'

import { MyContext } from '../context'

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
    parent: Parent,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<Result> | Result

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
    subscribe<R = Result, P = Parent>(
        parent: P,
        args: Args,
        context: TContext,
        info: GraphQLResolveInfo
    ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>
    resolve?<R = Result, P = Parent>(
        parent: P,
        args: Args,
        context: TContext,
        info: GraphQLResolveInfo
    ): R | Result | Promise<R | Result>
}

export type SubscriptionResolver<Result, Parent = {}, TContext = {}, Args = {}> =
    | ((...args: any[]) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
    | ISubscriptionResolverObject<Result, Parent, TContext, Args>

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
    parent: Parent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<Types>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
    next: NextResolverFn<TResult>,
    source: any,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface QueryResolvers<TContext = MyContext, TypeParent = {}> {
    getPosts?: QueryGetPostsResolver<Maybe<Post>, TypeParent, TContext>

    posts?: QueryPostsResolver<Maybe<Post>, TypeParent, TContext>

    getCount?: QueryGetCountResolver<Maybe<number>, TypeParent, TContext>

    count?: QueryCountResolver<Maybe<number>, TypeParent, TContext>
}

export type QueryGetPostsResolver<R = Maybe<Post>, Parent = {}, TContext = MyContext> = Resolver<R, Parent, TContext>
export type QueryPostsResolver<R = Maybe<Post>, Parent = {}, TContext = MyContext> = Resolver<R, Parent, TContext>
export type QueryGetCountResolver<R = Maybe<number>, Parent = {}, TContext = MyContext> = Resolver<R, Parent, TContext>
export type QueryCountResolver<R = Maybe<number>, Parent = {}, TContext = MyContext> = Resolver<R, Parent, TContext>

export interface PostResolvers<TContext = MyContext, TypeParent = Post> {
    id?: PostIdResolver<string, TypeParent, TContext>

    title?: PostTitleResolver<Maybe<string>, TypeParent, TContext>

    body?: PostBodyResolver<Maybe<string>, TypeParent, TContext>
}

export type PostIdResolver<R = string, Parent = Post, TContext = MyContext> = Resolver<R, Parent, TContext>
export type PostTitleResolver<R = Maybe<string>, Parent = Post, TContext = MyContext> = Resolver<R, Parent, TContext>
export type PostBodyResolver<R = Maybe<string>, Parent = Post, TContext = MyContext> = Resolver<R, Parent, TContext>

export interface MutationResolvers<TContext = MyContext, TypeParent = {}> {
    setCount?: MutationSetCountResolver<Maybe<number>, TypeParent, TContext>

    increment?: MutationIncrementResolver<Maybe<number>, TypeParent, TContext>
}

export type MutationSetCountResolver<R = Maybe<number>, Parent = {}, TContext = MyContext> = Resolver<
    R,
    Parent,
    TContext,
    MutationSetCountArgs
>
export interface MutationSetCountArgs {
    count?: Maybe<number>
}

export type MutationIncrementResolver<R = Maybe<number>, Parent = {}, TContext = MyContext> = Resolver<
    R,
    Parent,
    TContext
>

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<Result, SkipDirectiveArgs, MyContext>
export interface SkipDirectiveArgs {
    /** Skipped when true. */
    if: boolean
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<Result, IncludeDirectiveArgs, MyContext>
export interface IncludeDirectiveArgs {
    /** Included when true. */
    if: boolean
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<Result, DeprecatedDirectiveArgs, MyContext>
export interface DeprecatedDirectiveArgs {
    /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
    reason?: string
}

export type IResolvers<TContext = MyContext> = {
    Query?: QueryResolvers<TContext>
    Post?: PostResolvers<TContext>
    Mutation?: MutationResolvers<TContext>
} & { [typeName: string]: never }

export type IDirectiveResolvers<Result> = {
    skip?: SkipDirectiveResolver<Result>
    include?: IncludeDirectiveResolver<Result>
    deprecated?: DeprecatedDirectiveResolver<Result>
} & { [directiveName: string]: never }
