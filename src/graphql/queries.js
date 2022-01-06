/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEnrollees = /* GraphQL */ `
  query GetEnrollees($id: ID!) {
    getEnrollees(id: $id) {
      id
      LastName
      MiddleName
      FirstName
      Email
      createdAt
      updatedAt
    }
  }
`;
export const listEnrollees = /* GraphQL */ `
  query ListEnrollees(
    $filter: ModelEnrolleesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnrollees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        LastName
        MiddleName
        FirstName
        Email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVoucher = /* GraphQL */ `
  query GetVoucher($id: ID!) {
    getVoucher(id: $id) {
      id
      VoucherCode
      Enrollee_ID
      createdAt
      updatedAt
    }
  }
`;
export const listVouchers = /* GraphQL */ `
  query ListVouchers(
    $filter: ModelVoucherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVouchers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        VoucherCode
        Enrollee_ID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
