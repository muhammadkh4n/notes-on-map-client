import { colors } from '@material-ui/core';

export default {
  root: {
    backgroundColor: colors.grey['900'],
    height: 'calc(100vh - 64px)',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.grey[50],
    fontSize: '2em'
  },
  createBtn: {
    margin: '10px',
    padding: '20px 30px'
  }
};