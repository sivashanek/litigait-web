import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    grid: {
      width: '60%',
    },
  };

const MaterialUIPickers = () => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Grid container justify="space-around">
      <DatePicker
        margin="normal"
        label="Date picker"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <TimePicker
        margin="normal"
        label="Time picker"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </Grid>
  </MuiPickersUtilsProvider>
  );
}

export default withStyles(styles)(MaterialUIPickers);
