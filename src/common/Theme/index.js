import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#C2185B',
    secondary: '#03A9F4',
    error: '#D32F2F',
    textColor: '#FFF',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 5,
    backgroundColor: '#7C4DFF',
    color: 'white',
    borderColor: '#cccccc',
  },
});
export default theme;
