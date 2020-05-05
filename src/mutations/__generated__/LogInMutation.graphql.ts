/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type LogInMutationVariables = {
    email: string;
    password: string;
    name?: string | null;
};
export type LogInMutationResponse = {
    readonly loginMutation: {
        readonly viewer: {
            readonly id: string;
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
  $password: String!
  $name: String
) {
  loginMutation(input: {email: $email, password: $password, name: $name}) {
    viewer {
      id
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name",
    "type": "String"
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
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
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
    "text": "mutation LogInMutation(\n  $email: String!\n  $password: String!\n  $name: String\n) {\n  loginMutation(input: {email: $email, password: $password, name: $name}) {\n    viewer {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1f25a07576b8ceb934636fac4fb5a879';
export default node;
