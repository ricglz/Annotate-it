import Card from '@material-ui/core/Card';
import React, { ReactNode } from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

interface Props {
  children: ReactNode;
  useNormalFlex?: boolean;
}

const useStyles = makeStyles((_: Theme) => createStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '80%',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem',
    padding: '2rem',
  },
  normalFlex: {
    flex: 1,
  },
  otherFlex: {
    flex: '1 0 auto',
  },
}));

const CustomCard = ({
  children,
  useNormalFlex = false,
}: Props) => {
  const { card, main, normalFlex, otherFlex } = useStyles();
  return (
    <main className={`${main} ${useNormalFlex ? normalFlex : otherFlex}`}>
      <Card className={card} raised>
        { children }
      </Card>
    </main>
  );
}

export default CustomCard;
