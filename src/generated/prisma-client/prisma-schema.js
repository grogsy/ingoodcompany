module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCommunity {
  count: Int!
}

type AggregateMessage {
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

type Community {
  id: ID!
  name: String!
  category: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  hasPosts: Boolean!
  hasMessages: Boolean!
  privacy: String!
  owner: User!
  createdAt: DateTime!
}

type CommunityConnection {
  pageInfo: PageInfo!
  edges: [CommunityEdge]!
  aggregate: AggregateCommunity!
}

input CommunityCreateInput {
  id: ID
  name: String!
  category: String!
  posts: PostCreateManyWithoutCommunityInput
  hasPosts: Boolean!
  hasMessages: Boolean!
  privacy: String!
  owner: UserCreateOneWithoutCommunitiesInput!
}

input CommunityCreateManyWithoutOwnerInput {
  create: [CommunityCreateWithoutOwnerInput!]
  connect: [CommunityWhereUniqueInput!]
}

input CommunityCreateOneInput {
  create: CommunityCreateInput
  connect: CommunityWhereUniqueInput
}

input CommunityCreateOneWithoutPostsInput {
  create: CommunityCreateWithoutPostsInput
  connect: CommunityWhereUniqueInput
}

input CommunityCreateWithoutOwnerInput {
  id: ID
  name: String!
  category: String!
  posts: PostCreateManyWithoutCommunityInput
  hasPosts: Boolean!
  hasMessages: Boolean!
  privacy: String!
}

input CommunityCreateWithoutPostsInput {
  id: ID
  name: String!
  category: String!
  hasPosts: Boolean!
  hasMessages: Boolean!
  privacy: String!
  owner: UserCreateOneWithoutCommunitiesInput!
}

type CommunityEdge {
  node: Community!
  cursor: String!
}

enum CommunityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  category_ASC
  category_DESC
  hasPosts_ASC
  hasPosts_DESC
  hasMessages_ASC
  hasMessages_DESC
  privacy_ASC
  privacy_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommunityPreviousValues {
  id: ID!
  name: String!
  category: String!
  hasPosts: Boolean!
  hasMessages: Boolean!
  privacy: String!
  createdAt: DateTime!
}

input CommunityScalarWhereInput {
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
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  hasPosts: Boolean
  hasPosts_not: Boolean
  hasMessages: Boolean
  hasMessages_not: Boolean
  privacy: String
  privacy_not: String
  privacy_in: [String!]
  privacy_not_in: [String!]
  privacy_lt: String
  privacy_lte: String
  privacy_gt: String
  privacy_gte: String
  privacy_contains: String
  privacy_not_contains: String
  privacy_starts_with: String
  privacy_not_starts_with: String
  privacy_ends_with: String
  privacy_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CommunityScalarWhereInput!]
  OR: [CommunityScalarWhereInput!]
  NOT: [CommunityScalarWhereInput!]
}

type CommunitySubscriptionPayload {
  mutation: MutationType!
  node: Community
  updatedFields: [String!]
  previousValues: CommunityPreviousValues
}

input CommunitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommunityWhereInput
  AND: [CommunitySubscriptionWhereInput!]
  OR: [CommunitySubscriptionWhereInput!]
  NOT: [CommunitySubscriptionWhereInput!]
}

input CommunityUpdateDataInput {
  name: String
  category: String
  posts: PostUpdateManyWithoutCommunityInput
  hasPosts: Boolean
  hasMessages: Boolean
  privacy: String
  owner: UserUpdateOneRequiredWithoutCommunitiesInput
}

input CommunityUpdateInput {
  name: String
  category: String
  posts: PostUpdateManyWithoutCommunityInput
  hasPosts: Boolean
  hasMessages: Boolean
  privacy: String
  owner: UserUpdateOneRequiredWithoutCommunitiesInput
}

input CommunityUpdateManyDataInput {
  name: String
  category: String
  hasPosts: Boolean
  hasMessages: Boolean
  privacy: String
}

input CommunityUpdateManyMutationInput {
  name: String
  category: String
  hasPosts: Boolean
  hasMessages: Boolean
  privacy: String
}

input CommunityUpdateManyWithoutOwnerInput {
  create: [CommunityCreateWithoutOwnerInput!]
  delete: [CommunityWhereUniqueInput!]
  connect: [CommunityWhereUniqueInput!]
  set: [CommunityWhereUniqueInput!]
  disconnect: [CommunityWhereUniqueInput!]
  update: [CommunityUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [CommunityUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [CommunityScalarWhereInput!]
  updateMany: [CommunityUpdateManyWithWhereNestedInput!]
}

input CommunityUpdateManyWithWhereNestedInput {
  where: CommunityScalarWhereInput!
  data: CommunityUpdateManyDataInput!
}

input CommunityUpdateOneRequiredInput {
  create: CommunityCreateInput
  update: CommunityUpdateDataInput
  upsert: CommunityUpsertNestedInput
  connect: CommunityWhereUniqueInput
}

input CommunityUpdateOneRequiredWithoutPostsInput {
  create: CommunityCreateWithoutPostsInput
  update: CommunityUpdateWithoutPostsDataInput
  upsert: CommunityUpsertWithoutPostsInput
  connect: CommunityWhereUniqueInput
}

input CommunityUpdateWithoutOwnerDataInput {
  name: String
  category: String
  posts: PostUpdateManyWithoutCommunityInput
  hasPosts: Boolean
  hasMessages: Boolean
  privacy: String
}

input CommunityUpdateWithoutPostsDataInput {
  name: String
  category: String
  hasPosts: Boolean
  hasMessages: Boolean
  privacy: String
  owner: UserUpdateOneRequiredWithoutCommunitiesInput
}

input CommunityUpdateWithWhereUniqueWithoutOwnerInput {
  where: CommunityWhereUniqueInput!
  data: CommunityUpdateWithoutOwnerDataInput!
}

input CommunityUpsertNestedInput {
  update: CommunityUpdateDataInput!
  create: CommunityCreateInput!
}

input CommunityUpsertWithoutPostsInput {
  update: CommunityUpdateWithoutPostsDataInput!
  create: CommunityCreateWithoutPostsInput!
}

input CommunityUpsertWithWhereUniqueWithoutOwnerInput {
  where: CommunityWhereUniqueInput!
  update: CommunityUpdateWithoutOwnerDataInput!
  create: CommunityCreateWithoutOwnerInput!
}

input CommunityWhereInput {
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
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  hasPosts: Boolean
  hasPosts_not: Boolean
  hasMessages: Boolean
  hasMessages_not: Boolean
  privacy: String
  privacy_not: String
  privacy_in: [String!]
  privacy_not_in: [String!]
  privacy_lt: String
  privacy_lte: String
  privacy_gt: String
  privacy_gte: String
  privacy_contains: String
  privacy_not_contains: String
  privacy_starts_with: String
  privacy_not_starts_with: String
  privacy_ends_with: String
  privacy_not_ends_with: String
  owner: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CommunityWhereInput!]
  OR: [CommunityWhereInput!]
  NOT: [CommunityWhereInput!]
}

input CommunityWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Message {
  id: ID!
  sender: User!
  recip: String!
  content: String!
  community: Community!
  createdAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  id: ID
  sender: UserCreateOneWithoutMessagesInput!
  recip: String!
  content: String!
  community: CommunityCreateOneInput!
}

input MessageCreateManyWithoutSenderInput {
  create: [MessageCreateWithoutSenderInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutSenderInput {
  id: ID
  recip: String!
  content: String!
  community: CommunityCreateOneInput!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  recip_ASC
  recip_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
}

type MessagePreviousValues {
  id: ID!
  recip: String!
  content: String!
  createdAt: DateTime!
}

input MessageScalarWhereInput {
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
  recip: String
  recip_not: String
  recip_in: [String!]
  recip_not_in: [String!]
  recip_lt: String
  recip_lte: String
  recip_gt: String
  recip_gte: String
  recip_contains: String
  recip_not_contains: String
  recip_starts_with: String
  recip_not_starts_with: String
  recip_ends_with: String
  recip_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  sender: UserUpdateOneRequiredWithoutMessagesInput
  recip: String
  content: String
  community: CommunityUpdateOneRequiredInput
}

input MessageUpdateManyDataInput {
  recip: String
  content: String
}

input MessageUpdateManyMutationInput {
  recip: String
  content: String
}

input MessageUpdateManyWithoutSenderInput {
  create: [MessageCreateWithoutSenderInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutSenderInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutSenderInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutSenderDataInput {
  recip: String
  content: String
  community: CommunityUpdateOneRequiredInput
}

input MessageUpdateWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutSenderDataInput!
}

input MessageUpsertWithWhereUniqueWithoutSenderInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutSenderDataInput!
  create: MessageCreateWithoutSenderInput!
}

input MessageWhereInput {
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
  sender: UserWhereInput
  recip: String
  recip_not: String
  recip_in: [String!]
  recip_not_in: [String!]
  recip_lt: String
  recip_lte: String
  recip_gt: String
  recip_gte: String
  recip_contains: String
  recip_not_contains: String
  recip_starts_with: String
  recip_not_starts_with: String
  recip_ends_with: String
  recip_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  community: CommunityWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createCommunity(data: CommunityCreateInput!): Community!
  updateCommunity(data: CommunityUpdateInput!, where: CommunityWhereUniqueInput!): Community
  updateManyCommunities(data: CommunityUpdateManyMutationInput!, where: CommunityWhereInput): BatchPayload!
  upsertCommunity(where: CommunityWhereUniqueInput!, create: CommunityCreateInput!, update: CommunityUpdateInput!): Community!
  deleteCommunity(where: CommunityWhereUniqueInput!): Community
  deleteManyCommunities(where: CommunityWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
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
  text: String!
  community: Community!
  user: User!
  createdAt: DateTime!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  text: String!
  community: CommunityCreateOneWithoutPostsInput!
  user: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutCommunityInput {
  create: [PostCreateWithoutCommunityInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutUserInput {
  create: [PostCreateWithoutUserInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutCommunityInput {
  id: ID
  text: String!
  user: UserCreateOneWithoutPostsInput!
}

input PostCreateWithoutUserInput {
  id: ID
  text: String!
  community: CommunityCreateOneWithoutPostsInput!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
}

input PostScalarWhereInput {
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
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
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
  text: String
  community: CommunityUpdateOneRequiredWithoutPostsInput
  user: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyDataInput {
  text: String
}

input PostUpdateManyMutationInput {
  text: String
}

input PostUpdateManyWithoutCommunityInput {
  create: [PostCreateWithoutCommunityInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutCommunityInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutCommunityInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutUserInput {
  create: [PostCreateWithoutUserInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutCommunityDataInput {
  text: String
  user: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateWithoutUserDataInput {
  text: String
  community: CommunityUpdateOneRequiredWithoutPostsInput
}

input PostUpdateWithWhereUniqueWithoutCommunityInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutCommunityDataInput!
}

input PostUpdateWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutUserDataInput!
}

input PostUpsertWithWhereUniqueWithoutCommunityInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutCommunityDataInput!
  create: PostCreateWithoutCommunityInput!
}

input PostUpsertWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutUserDataInput!
  create: PostCreateWithoutUserInput!
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
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  community: CommunityWhereInput
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  community(where: CommunityWhereUniqueInput!): Community
  communities(where: CommunityWhereInput, orderBy: CommunityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Community]!
  communitiesConnection(where: CommunityWhereInput, orderBy: CommunityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommunityConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  community(where: CommunitySubscriptionWhereInput): CommunitySubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  password: String!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  communities(where: CommunityWhereInput, orderBy: CommunityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Community!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  createdAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  password: String!
  messages: MessageCreateManyWithoutSenderInput
  communities: CommunityCreateManyWithoutOwnerInput
  posts: PostCreateManyWithoutUserInput
}

input UserCreateOneWithoutCommunitiesInput {
  create: UserCreateWithoutCommunitiesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommunitiesInput {
  id: ID
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  password: String!
  messages: MessageCreateManyWithoutSenderInput
  posts: PostCreateManyWithoutUserInput
}

input UserCreateWithoutMessagesInput {
  id: ID
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  password: String!
  communities: CommunityCreateManyWithoutOwnerInput
  posts: PostCreateManyWithoutUserInput
}

input UserCreateWithoutPostsInput {
  id: ID
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  password: String!
  messages: MessageCreateManyWithoutSenderInput
  communities: CommunityCreateManyWithoutOwnerInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  username: String!
  password: String!
  createdAt: DateTime!
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

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  messages: MessageUpdateManyWithoutSenderInput
  communities: CommunityUpdateManyWithoutOwnerInput
  posts: PostUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
}

input UserUpdateOneRequiredWithoutCommunitiesInput {
  create: UserCreateWithoutCommunitiesInput
  update: UserUpdateWithoutCommunitiesDataInput
  upsert: UserUpsertWithoutCommunitiesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCommunitiesDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  messages: MessageUpdateManyWithoutSenderInput
  posts: PostUpdateManyWithoutUserInput
}

input UserUpdateWithoutMessagesDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  communities: CommunityUpdateManyWithoutOwnerInput
  posts: PostUpdateManyWithoutUserInput
}

input UserUpdateWithoutPostsDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  messages: MessageUpdateManyWithoutSenderInput
  communities: CommunityUpdateManyWithoutOwnerInput
}

input UserUpsertWithoutCommunitiesInput {
  update: UserUpdateWithoutCommunitiesDataInput!
  create: UserCreateWithoutCommunitiesInput!
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
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
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  communities_every: CommunityWhereInput
  communities_some: CommunityWhereInput
  communities_none: CommunityWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    