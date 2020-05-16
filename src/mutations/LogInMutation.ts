import { LogInMutationVariables } from './__generated__/LogInMutation.graphql';
import { commitMutation, graphql } from 'react-relay';
import environment from '../config/relay-env';

const mutation = graphql`
  mutation LogInMutation($email: String!, $password: String!, $name: String) {
    loginMutation(input: {
      email: $email,
      password: $password,
      name: $name
    }) {
      viewer {
        id
      }
    }
  }
`

export default function LogInMutation(
  variables: LogInMutationVariables, onCompleted: () => void
) {
  commitMutation(environment, { mutation, variables, onCompleted });
};
