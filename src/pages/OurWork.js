// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import {OurWorkHeading,OurWorkProjectNavigator} from '../sections/ourwork';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function OurWork() {
  return (
    <Page title="Our Work">
      <OurWorkHeading/>
      <OurWorkProjectNavigator/>
    </Page>
  );
}
