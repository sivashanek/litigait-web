

/**
 * 
 * Vew Cases Page
 * 
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Styles from './styles';



export default function (name, path, columns, actions, selectors) {


    const { selectRecord } = selectors;
    function ViewCasesPage({ record, dispatch }) {
        const classes = Styles();

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.children}>
                    <Grid continer spacing={3}>
                        <Grid item xs={12}><Link to={path} className={classes.link}>Back</Link></Grid>
                        <Grid item xs={12}>
                            <Grid container justify="space-between">
                                <Typography component="h1" variant="h5">
                                    Stephen James
                                </Typography>
                                <hr />
                                <Typography component="h1" variant="h5">
                                    Active
                                </Typography>

                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="space-between">
                                <Typography component="h4" variant="h6">
                                    3 car collision on 3/21 on Sepulveda Blvd
                                </Typography>
                                <hr />
                                <Typography component="h4" variant="h6">
                                    8/4/2020
                                </Typography>

                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.cards}>
                                        <CardContent>
                                            <Typography component="h1" variant="h5">
                                                Frogs
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.cards}>
                                        <CardContent>
                                            <Typography component="h1" variant="h5">
                                                Frogs
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.cards}>
                                        <CardContent>
                                            <Typography component="h1" variant="h5">
                                                Frogs
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.cards}>
                                        <CardContent>
                                            <Typography component="h1" variant="h5">
                                                Frogs
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>);
    }

    ViewCasesPage.propTypes = {
        record: PropTypes.object,
    };

    const mapStateToProps = createStructuredSelector({
        record: (state, props) => selectRecord(props.match.params.id)(state)
    });

    const withConnect = connect(
        mapStateToProps,
    );


    return compose(
        withConnect,
        memo
    )(ViewCasesPage);

}