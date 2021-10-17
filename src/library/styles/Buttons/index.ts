import { Styles } from '@material-ui/styles/withStyles';
import genStyleCreator from '../genStyleCreator';
import success from './success';

const subsets : { [s: string]: Styles<any, any> } = {
  success,
};

export default genStyleCreator(subsets);
