import { Styles } from '@material-ui/styles/withStyles';
import genStyleCreator from '../genStyleCreator';
import login from './login';

const subsets : { [s: string]: Styles<any, any> } = {
  login,
};

export default genStyleCreator(subsets);
