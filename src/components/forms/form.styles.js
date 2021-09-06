import { makeStyles } from '@material-ui/core/styles';

export const formStyles = makeStyles({
  form: {
    marginTop: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: '1rem',
  },
  formControl: {
    width: '100%',
  },
  formGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem 0 1rem 0',
  },
  successMessage: {
    display: 'flex',
    justifyContent: 'start',
    gap: '0.3rem',
    margin: '1rem 0 1rem 0',
  },
  successHeading: {
    display: 'flex',
    justifyContent: 'center',
  },
});
