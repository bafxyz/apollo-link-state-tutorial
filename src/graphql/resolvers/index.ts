import counter from './counter'
import posts from './posts'
import { merge } from 'lodash-es'

export const resolvers = merge(counter, posts)
