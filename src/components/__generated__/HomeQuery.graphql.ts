/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly firstName: string | null;
    } | null;
};
export type HomeQuery = {
    readonly response: HomeQueryResponse;
    readonly variables: HomeQueryVariables;
};



/*
query HomeQuery {
  viewer {
    id
    firstName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
        "name": "firstName",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  viewer {\n    id\n    firstName\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a50936ae43880a486147b6638680ac15';
export default node;
