/**
 * 
 * Create Record Form
 * 
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { ImplementationFor } from './utils';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Styles from './styles';

function createRecordForm(props) {

    const classes = Styles();
    const { handleSubmit, pristine, submitting, fields, path, error, metaData, locationState } = props;

    return (
        <div>
            <form onSubmit={handleSubmit} className={classes.form} noValidate >
                <Grid container spacing={3}>
                    {(fields || []).map((field, index) => {
                        const InputComponent = ImplementationFor[field.type];
                        return <Grid key={index} item xs={12}>
                            <Field name={field.value} label={field.label} component={InputComponent} required={field.required} {...field} />
                        </Grid>
                    })}
                </Grid>

                <Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submitBtn} >
                        Create
                </Button>
                    <Link to={path}>
                        <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            className={classes.cancelBtn} >
                            Cancel
                    </Button>
                    </Link>
                </Grid>
            </form>
        </div>
    )

}




export default reduxForm({
    form: 'createRecord',
})(createRecordForm);