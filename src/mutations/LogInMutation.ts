import firebase from '../config/firebase';
import { UserContext } from '../contexts/UserContext';
import { graphql } from 'react-relay';
import { useContext } from 'react';
import { useMutation } from 'relay-hooks';

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

export default function useLogInMutation() {
  const { changeUser } = useContext(UserContext);
  const onCompleted = () => {
    const user = firebase.auth().currentUser;
    if(!user) {
      return;
    }
    const { email, uid } = user;
    if(!email) {
      return;
    }
    changeUser({ email, uid });
  }
  return useMutation(mutation, { onCompleted });
}
