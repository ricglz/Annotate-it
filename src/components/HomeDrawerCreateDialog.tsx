import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

interface Props {
  open: boolean;
  toogle: (e: any) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      justifyContent: 'space-between'
    },
  }),
);

const HomeDrawerCreateDialog = ({ open, toogle }: Props) => {
  const { actions } = useStyles();
  return (
    <Dialog
      aria-labelledby="create-folder-dialog"
      onClose={toogle}
      open={open}
    >
      <DialogTitle id="create-folder-dialog">Create</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Name of folder"
          margin="dense"
        />
      </DialogContent>
      <DialogActions className={actions}>
        <Button color="secondary" onClick={toogle}>Cancel</Button>
        <Button color="primary" onClick={toogle}>Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default HomeDrawerCreateDialog;
