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

const useStyles = makeStyles((_: Theme) => createStyles({
  actions: {
    justifyContent: 'space-between'
  },
}));

interface Props {
  identifier: string;
  label: string;
  loading: boolean;
  loadingLabel: string;
  name: string;
  onChange: (e: any) => void;
  onClick: (e: any) => void;
  open: boolean;
  toogle: (e: any) => void;
}

const HomeDrawerDialogForm = ({
  identifier, label, loading, loadingLabel, name, onChange, onClick,
  open, toogle
}: Props) => {
  const { actions } = useStyles();
  return (
    <Dialog aria-labelledby={identifier} onClose={toogle} open={open}>
      <DialogTitle id={identifier}>{label}</DialogTitle>
      <DialogContent dividers>
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Name of folder"
          onChange={onChange}
          margin="dense"
          value={name}
        />
      </DialogContent>
      <DialogActions className={actions}>
        <Button color="secondary" onClick={toogle}>Cancel</Button>
        <Button color="primary" onClick={onClick}>
          { loading ? loadingLabel : label }
        </Button>
      </DialogActions>
    </Dialog>

  );
};

export default HomeDrawerDialogForm;
