/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type LogInMutationVariables = {
    email: string;
};
export type LogInMutationResponse = {
    readonly loginMutation: {
        readonly viewer: {
            readonly id: string;
            readonly email: string | null;
        } | null;
    };
};
export type LogInMutation = {
    readonly response: LogInMutationResponse;
    readonly variables: LogInMutationVariables;
};



/*
mutation LogInMutation(
  $email: String!
) {
  loginMutation(input: {email: $email}) {
    viewer {
      id
      email
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "LoginMutationPayload",
    "kind": "LinkedField",
    "name": "loginMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LogInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LogInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "LogInMutation",
    "operationKind": "mutation",
    "text": "mutation LogInMutation(\n  $email: String!\n) {\n  loginMutation(input: {email: $email}) {\n    viewer {\n      id\n      email\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ccdea04843d643f24d5b830c21fad13f';
export default node;
