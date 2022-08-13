import { gql } from "apollo-server";

const typeDefs = gql`
  type Source {
    id: ID
    name: String
  }

  type Article {
    author: String
    content: String
    description: String
    publishedAt: String!
    source: Source!
    title: String
    url: String!
    urlToImage: String
  }

  enum SearchIn {
    title
    description
    content
  }

  enum Country {
    ae
    ar
    at
    au
    be
    bg
    br
    ca
    ch
    cn
    co
    cu
    cz
    de
    eg
    fr
    gb
    gr
    hk
    hu
    id
    ie
    il
    in
    it
    jp
    kr
    lt
    lv
    ma
    mx
    my
    ng
    nl
    no
    nz
    ph
    pl
    pt
    ro
    rs
    ru
    sa
    se
    sg
    si
    sk
    th
    tr
    tw
    ua
    us
    ve
    za
  }

  enum Category {
    business
    entertainment
    general
    health
    science
    sports
    technology
  }

  type Query {
    everything(
      q: String
      searchIn: SearchIn
      sources: String
      domains: String
      excludeDomains: String
      from: String
      to: String
      language: String
      sortBy: String
      pageSize: Int
      page: Int
    ): [Article!]!
    headlines(
      country: Country
      category: Category
      sources: String
      keyword: String
      pageSize: Int
      page: Int
    ): [Article!]!
  }
`;

export default typeDefs;
