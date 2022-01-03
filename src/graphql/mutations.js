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
