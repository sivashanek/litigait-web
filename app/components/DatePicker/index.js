import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Styles from './styles';
import moment from 'moment';

import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

export default function ({ input, label, autoFocus, required, meta: { touched, error } }) {
  const classes = Styles();

  const { id, name, value, onChange } = input;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <DatePicker  className={classes.fieldColor}
        key={id}
          margin="normal"
          name={name}
          label={<span className={classes.textSize} >{label}</span>}
          onChange={(val) => onChange(val)}
          value={value && moment(value) || moment()}
          format="MM/dd/yyyy"
        />
    </MuiPickersUtilsProvider>
  );
}
