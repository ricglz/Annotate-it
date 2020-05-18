import Card from './Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <Card useNormalFlex>
      <CardContent>
        <Typography paragraph>
          Annotate it! Was done with the objective of easing the note
          taking process. This project was done with academic purposes
          as final project of the Web Development Class by Ricardo González
        </Typography>
        <Typography paragraph>
          You can begin using it by&nbsp;
          <Link to="/">
            clicking this link.
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
};

export default React.memo(AboutUs);
