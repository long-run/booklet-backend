// Code generated by Prisma (prisma@1.27.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateBook {
  count: Int!
}

type AggregateBookFeed {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Book {
  id: ID!
  title: String!
  isbn: String!
  author: String
  book_cover: String
}

type BookConnection {
  pageInfo: PageInfo!
  edges: [BookEdge]!
  aggregate: AggregateBook!
}

input BookCreateInput {
  title: String!
  isbn: String!
  author: String
  book_cover: String
}

input BookCreateOneInput {
  create: BookCreateInput
  connect: BookWhereUniqueInput
}

type BookEdge {
  node: Book!
  cursor: String!
}

type BookFeed {
  id: ID!
  book: Book!
  rating: Int
  status: FeedStatus
  background_theme: String
  note: String
  reg_date: String
  modified_date: String
}

type BookFeedConnection {
  pageInfo: PageInfo!
  edges: [BookFeedEdge]!
  aggregate: AggregateBookFeed!
}

input BookFeedCreateInput {
  book: BookCreateOneInput!
  rating: Int
  status: FeedStatus
  background_theme: String
  note: String
  reg_date: String
  modified_date: String
}

input BookFeedCreateOneInput {
  create: BookFeedCreateInput
  connect: BookFeedWhereUniqueInput
}

type BookFeedEdge {
  node: BookFeed!
  cursor: String!
}

enum BookFeedOrderByInput {
  id_ASC
  id_DESC
  rating_ASC
  rating_DESC
  status_ASC
  status_DESC
  background_theme_ASC
  background_theme_DESC
  note_ASC
  note_DESC
  reg_date_ASC
  reg_date_DESC
  modified_date_ASC
  modified_date_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookFeedPreviousValues {
  id: ID!
  rating: Int
  status: FeedStatus
  background_theme: String
  note: String
  reg_date: String
  modified_date: String
}

type BookFeedSubscriptionPayload {
  mutation: MutationType!
  node: BookFeed
  updatedFields: [String!]
  previousValues: BookFeedPreviousValues
}

input BookFeedSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookFeedWhereInput
  AND: [BookFeedSubscriptionWhereInput!]
  OR: [BookFeedSubscriptionWhereInput!]
  NOT: [BookFeedSubscriptionWhereInput!]
}

input BookFeedUpdateDataInput {
  book: BookUpdateOneRequiredInput
  rating: Int
  status: FeedStatus
  background_theme: String
  note: String
  reg_date: String
  modified_date: String
}

input BookFeedUpdateInput {
  book: BookUpdateOneRequiredInput
  rating: Int
  status: FeedStatus
  background_theme: String
  note: String
  reg_date: String
  modified_date: String
}

input BookFeedUpdateManyMutationInput {
  rating: Int
  status: FeedStatus
  background_theme: String
  note: String
  reg_date: String
  modified_date: String
}

input BookFeedUpdateOneRequiredInput {
  create: BookFeedCreateInput
  update: BookFeedUpdateDataInput
  upsert: BookFeedUpsertNestedInput
  connect: BookFeedWhereUniqueInput
}

input BookFeedUpsertNestedInput {
  update: BookFeedUpdateDataInput!
  create: BookFeedCreateInput!
}

input BookFeedWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  book: BookWhereInput
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  status: FeedStatus
  status_not: FeedStatus
  status_in: [FeedStatus!]
  status_not_in: [FeedStatus!]
  background_theme: String
  background_theme_not: String
  background_theme_in: [String!]
  background_theme_not_in: [String!]
  background_theme_lt: String
  background_theme_lte: String
  background_theme_gt: String
  background_theme_gte: String
  background_theme_contains: String
  background_theme_not_contains: String
  background_theme_starts_with: String
  background_theme_not_starts_with: String
  background_theme_ends_with: String
  background_theme_not_ends_with: String
  note: String
  note_not: String
  note_in: [String!]
  note_not_in: [String!]
  note_lt: String
  note_lte: String
  note_gt: String
  note_gte: String
  note_contains: String
  note_not_contains: String
  note_starts_with: String
  note_not_starts_with: String
  note_ends_with: String
  note_not_ends_with: String
  reg_date: String
  reg_date_not: String
  reg_date_in: [String!]
  reg_date_not_in: [String!]
  reg_date_lt: String
  reg_date_lte: String
  reg_date_gt: String
  reg_date_gte: String
  reg_date_contains: String
  reg_date_not_contains: String
  reg_date_starts_with: String
  reg_date_not_starts_with: String
  reg_date_ends_with: String
  reg_date_not_ends_with: String
  modified_date: String
  modified_date_not: String
  modified_date_in: [String!]
  modified_date_not_in: [String!]
  modified_date_lt: String
  modified_date_lte: String
  modified_date_gt: String
  modified_date_gte: String
  modified_date_contains: String
  modified_date_not_contains: String
  modified_date_starts_with: String
  modified_date_not_starts_with: String
  modified_date_ends_with: String
  modified_date_not_ends_with: String
  AND: [BookFeedWhereInput!]
  OR: [BookFeedWhereInput!]
  NOT: [BookFeedWhereInput!]
}

input BookFeedWhereUniqueInput {
  id: ID
}

enum BookOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  isbn_ASC
  isbn_DESC
  author_ASC
  author_DESC
  book_cover_ASC
  book_cover_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookPreviousValues {
  id: ID!
  title: String!
  isbn: String!
  author: String
  book_cover: String
}

type BookSubscriptionPayload {
  mutation: MutationType!
  node: Book
  updatedFields: [String!]
  previousValues: BookPreviousValues
}

input BookSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookWhereInput
  AND: [BookSubscriptionWhereInput!]
  OR: [BookSubscriptionWhereInput!]
  NOT: [BookSubscriptionWhereInput!]
}

input BookUpdateDataInput {
  title: String
  isbn: String
  author: String
  book_cover: String
}

input BookUpdateInput {
  title: String
  isbn: String
  author: String
  book_cover: String
}

input BookUpdateManyMutationInput {
  title: String
  isbn: String
  author: String
  book_cover: String
}

input BookUpdateOneRequiredInput {
  create: BookCreateInput
  update: BookUpdateDataInput
  upsert: BookUpsertNestedInput
  connect: BookWhereUniqueInput
}

input BookUpsertNestedInput {
  update: BookUpdateDataInput!
  create: BookCreateInput!
}

input BookWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  isbn: String
  isbn_not: String
  isbn_in: [String!]
  isbn_not_in: [String!]
  isbn_lt: String
  isbn_lte: String
  isbn_gt: String
  isbn_gte: String
  isbn_contains: String
  isbn_not_contains: String
  isbn_starts_with: String
  isbn_not_starts_with: String
  isbn_ends_with: String
  isbn_not_ends_with: String
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  book_cover: String
  book_cover_not: String
  book_cover_in: [String!]
  book_cover_not_in: [String!]
  book_cover_lt: String
  book_cover_lte: String
  book_cover_gt: String
  book_cover_gte: String
  book_cover_contains: String
  book_cover_not_contains: String
  book_cover_starts_with: String
  book_cover_not_starts_with: String
  book_cover_ends_with: String
  book_cover_not_ends_with: String
  AND: [BookWhereInput!]
  OR: [BookWhereInput!]
  NOT: [BookWhereInput!]
}

input BookWhereUniqueInput {
  id: ID
  isbn: String
}

enum FeedStatus {
  CURRENT_READING
  READ
  WANT_TO_READ
}

scalar Long

type Mutation {
  createBook(data: BookCreateInput!): Book!
  updateBook(data: BookUpdateInput!, where: BookWhereUniqueInput!): Book
  updateManyBooks(data: BookUpdateManyMutationInput!, where: BookWhereInput): BatchPayload!
  upsertBook(where: BookWhereUniqueInput!, create: BookCreateInput!, update: BookUpdateInput!): Book!
  deleteBook(where: BookWhereUniqueInput!): Book
  deleteManyBooks(where: BookWhereInput): BatchPayload!
  createBookFeed(data: BookFeedCreateInput!): BookFeed!
  updateBookFeed(data: BookFeedUpdateInput!, where: BookFeedWhereUniqueInput!): BookFeed
  updateManyBookFeeds(data: BookFeedUpdateManyMutationInput!, where: BookFeedWhereInput): BatchPayload!
  upsertBookFeed(where: BookFeedWhereUniqueInput!, create: BookFeedCreateInput!, update: BookFeedUpdateInput!): BookFeed!
  deleteBookFeed(where: BookFeedWhereUniqueInput!): BookFeed
  deleteManyBookFeeds(where: BookFeedWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  user: User!
  bookfeed: BookFeed!
  like_count: Int!
  liked: Boolean!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  user: UserCreateOneInput!
  bookfeed: BookFeedCreateOneInput!
  like_count: Int
  liked: Boolean
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  like_count_ASC
  like_count_DESC
  liked_ASC
  liked_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  like_count: Int!
  liked: Boolean!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  user: UserUpdateOneRequiredInput
  bookfeed: BookFeedUpdateOneRequiredInput
  like_count: Int
  liked: Boolean
}

input PostUpdateManyMutationInput {
  like_count: Int
  liked: Boolean
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  bookfeed: BookFeedWhereInput
  like_count: Int
  like_count_not: Int
  like_count_in: [Int!]
  like_count_not_in: [Int!]
  like_count_lt: Int
  like_count_lte: Int
  like_count_gt: Int
  like_count_gte: Int
  liked: Boolean
  liked_not: Boolean
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  book(where: BookWhereUniqueInput!): Book
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book]!
  booksConnection(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookConnection!
  bookFeed(where: BookFeedWhereUniqueInput!): BookFeed
  bookFeeds(where: BookFeedWhereInput, orderBy: BookFeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BookFeed]!
  bookFeedsConnection(where: BookFeedWhereInput, orderBy: BookFeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookFeedConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  book(where: BookSubscriptionWhereInput): BookSubscriptionPayload
  bookFeed(where: BookFeedSubscriptionWhereInput): BookFeedSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`