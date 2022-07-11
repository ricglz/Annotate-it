import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { AlertComponentPropsWithStyle } from 'react-alert';

const AlertTemplate = ({ message, options }: AlertComponentPropsWithStyle) => (
  <Alert severity={options.type}>{message}</Alert>
);

export default AlertTemplate;
