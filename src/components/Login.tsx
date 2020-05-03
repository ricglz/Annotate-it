import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import GoogleButton from 'react-google-button'
import React from 'react';

export default function Login(){
  const onClick = React.useCallback(() => {
    console.log('The button was clicked');
  }, []);
  return (
    <Card>
      <CardHeader title="Log-in" />
      <CardContent>
        <GoogleButton onClick={onClick}/>
      </CardContent>
    </Card>
  );
}
