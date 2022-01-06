/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEnrollees = /* GraphQL */ `
  mutation CreateEnrollees(
    $input: CreateEnrolleesInput!
    $condition: ModelEnrolleesConditionInput
  ) {
    createEnrollees(input: $input, condition: $condition) {
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
export const updateEnrollees = /* GraphQL */ `
  mutation UpdateEnrollees(
    $input: UpdateEnrolleesInput!
    $condition: ModelEnrolleesConditionInput
  ) {
    updateEnrollees(input: $input, condition: $condition) {
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
export const deleteEnrollees = /* GraphQL */ `
  mutation DeleteEnrollees(
    $input: DeleteEnrolleesInput!
    $condition: ModelEnrolleesConditionInput
  ) {
    deleteEnrollees(input: $input, condition: $condition) {
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
export const createVoucher = /* GraphQL */ `
  mutation CreateVoucher(
    $input: CreateVoucherInput!
    $condition: ModelVoucherConditionInput
  ) {
    createVoucher(input: $input, condition: $condition) {
      id
      VoucherCode
      Enrollee_ID
      createdAt
      updatedAt
    }
  }
`;
export const updateVoucher = /* GraphQL */ `
  mutation UpdateVoucher(
    $input: UpdateVoucherInput!
    $condition: ModelVoucherConditionInput
  ) {
    updateVoucher(input: $input, condition: $condition) {
      id
      VoucherCode
      Enrollee_ID
      createdAt
      updatedAt
    }
  }
`;
export const deleteVoucher = /* GraphQL */ `
  mutation DeleteVoucher(
    $input: DeleteVoucherInput!
    $condition: ModelVoucherConditionInput
  ) {
    deleteVoucher(input: $input, condition: $condition) {
      id
      VoucherCode
      Enrollee_ID
      createdAt
      updatedAt
    }
  }
`;
