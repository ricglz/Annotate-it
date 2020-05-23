import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PencilIcon from '@material-ui/icons/Edit';
import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { NavLink } from 'react-router-dom';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) => createStyles({
  link: {
    color: theme.palette.text.primary,
    flex: 1,
  },
  selected: {
    color: theme.palette.primary.light
  },
}));

interface Folder {
  id: string;
  name: string;
}

interface Props {
  folder: Folder;
  setFolderEdit: (folder: Folder) => void;
  toogleEdit: (e: any) => void;
}

const HomeDrawerFolder = ({ folder, toogleEdit, setFolderEdit }: Props) => {
  const { link, selected } = useStyles();
  const onClick = React.useCallback((e: any) => {
    setFolderEdit(folder);
    toogleEdit(e);
  }, [folder, setFolderEdit, toogleEdit])
  return (
    <>
      <ListItem button>
        <ListItemIcon onClick={onClick}>
          <PencilIcon />
        </ListItemIcon>
        <NavLink
          activeClassName={selected}
          className={link}
          key={folder.id}
          to={`/folder/${folder.id}`}
        >
          <ListItemText primary={folder.name} />
        </NavLink>
      </ListItem>
    </>
  );
};

export default HomeDrawerFolder;
