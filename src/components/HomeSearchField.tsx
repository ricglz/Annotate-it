import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import React, { KeyboardEvent } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTextField from '../hooks/useTextField';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    display: 'flex',
    flexGrow: 1,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
    },
  },
  searchIcon: {
    alignItems: 'center',
    display: 'flex',
    paddingLeft: theme.spacing(3),
    pointerEvents: 'none',
  },
  inputRoot: {
    color: 'inherit',
    flexGrow: 1,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(0.1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create('width'),
  },
}));

const HomeSearchField = () => {
  const { search, searchIcon, inputRoot, inputInput } = useStyles();
  const [value, onChange] = useTextField();
  const history = useHistory();
  const performSearch = React.useCallback(() => {
    history.push(`/notes/${value}`);
  }, [history, value]);
  const onKeyDown = React.useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.keyCode === 13) {
      performSearch();
    }
  },[performSearch]);
  return (
    <div className={search}>
      <IconButton
        aria-label="search notes button"
        className={searchIcon}
        onClick={performSearch}
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        classes={{ root: inputRoot, input: inputInput }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Search…"
        value={value}
      />
    </div>
  );
}

export default HomeSearchField;
