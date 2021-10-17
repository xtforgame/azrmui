import { Styles } from '@material-ui/styles/withStyles';
import genStyleCreator from '../genStyleCreator';
import flex from './flex';
import appBar from './appBar';
import mobile from './mobile';
import genderColors from './genderColors';

const subsets : { [s: string]: Styles<any, any> } = {
  flex,
  appBar,
  mobile,
  genderColors,
};

export default genStyleCreator(subsets);
