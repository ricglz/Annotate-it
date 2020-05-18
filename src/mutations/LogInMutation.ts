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
      token
    }
  }
`

export default function LogInMutation(
  variables: LogInMutationVariables, callback: () => void
) {
  const onCompleted = ({ loginMutation }: any) => {
    const { token } = loginMutation;
    if(token) {
      localStorage.setItem('token', token)
      callback();
    }
  }
  commitMutation(environment, { mutation, variables, onCompleted });
};
