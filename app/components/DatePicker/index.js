import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Styles from './styles';


import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

export default function ({ input, label, autoFocus, required, meta: { touched, error } }) {
  const classes = Styles();

  const { id, name, onChange } = input;
  const value = new Date();
  console.log("date value = ",value)
  let tempValue = value;
  if(tempValue==''){
    tempValue = new Date();
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <DatePicker  className={classes.fieldColor}
          margin="normal"
          name={name}
          label={<span className={classes.textSize} >{label}</span>}
          onChange={(e) => onChange(e.target.value)}
          value={value || ''}
          format="MM/dd/yyyy"
        />
    </MuiPickersUtilsProvider>
  );
}
// const DateField = (props) =>{
  
//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid container className={classes.grid} justify="space-around">
//         <DatePicker
//           margin="normal"
//           label="Date picker"
//           value={selectedDate}
//           onChange={this.handleDateChange}
//           format="MM/dd/yyyy"
//         />
//       </Grid>
//     </MuiPickersUtilsProvider>
//   );
// }

// class MaterialUIPickers extends React.Component {
//   state = {
//     // The first commit of Material-UI
//     selectedDate: new Date()
//   };

//   handleDateChange = date => {
//     this.setState({ selectedDate: date });
//   };

//   render() {
//     const { classes } = this.props;
//     const { selectedDate } = this.state;
//     console.log("selectedDate = ",selectedDate);

//     return (
//       <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <Grid container className={classes.grid} justify="space-around">
//           <DatePicker
//             margin="normal"
//             label="Date picker"
//             value={selectedDate}
//             onChange={this.handleDateChange}
//             format="MM/dd/yyyy"
//           />
//         </Grid>
//       </MuiPickersUtilsProvider>
//     );
//   }
// }

// MaterialUIPickers.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default MaterialUIPickers;