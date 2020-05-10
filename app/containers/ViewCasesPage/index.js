

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
import SVG from 'react-inlinesvg';
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
                    <Grid container spacing={3}>
                        <Grid item xs={12}><Link to={path} className={classes.link}>Back</Link></Grid>
                        <Grid item xs={12}>
                            <Grid container justify="space-between">
                                <Typography variant="subtitle1" gutterBottom>
                                    <b>Stephen James</b>
                                </Typography>
                                <hr />
                                <Typography variant="subtitle1" gutterBottom>
                                    <b>Active</b>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="space-between">
                                <Typography variant="subtitle1" gutterBottom>
                                    3 car collision on 3/21 on Sepulveda Blvd
                                </Typography>
                                <hr />
                                <Typography variant="subtitle1" gutterBottom>
                                    8/4/2020
                                </Typography>

                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Card className={classes.cards}>
                                        <CardContent>
                                            <Typography component="subtitle1" style={{fontWeight: 'bold'}}>
                                                FROGS
                                            </Typography>
                                            <Grid container spacing={2} className={classes.body}>
                                                <Grid item xs={12} justify="space-between">
                                                    <Typography component="span" variant="subtitle1">
                                                        <span style={{ marginRight: '14px', color: 'blue' }}>22</span>Questions in the uploaded doc
                                                    </Typography>
                                                    <Typography component="span" variant="subtitle1">
                                                        Uploaded 3/23
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} justify="space-between">
                                                    <Typography component="span" variant="subtitle1">
                                                        <span style={{ marginRight: '10px', color: 'blue' }}>15</span> Questions sent to client
                                                    </Typography>
                                                    <Typography component="span" variant="subtitle1">
                                                        Sent 3/28
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} justify="space-between">
                                                    <Typography component="span" variant="subtitle1">
                                                        <span style={{ marginRight: '14px', color: 'blue' }}>22</span>Responded by client
                                                    </Typography>
                                                    <Typography component="span" variant="subtitle1">
                                                        Updated 4/03
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} justify="space-between">
                                                    <Typography component="span" variant="subtitle1">
                                                        <span style={{ marginRight: '14px', color: 'blue' }}>20</span>Responses finalized
                                                    </Typography>
                                                    <Typography component="span" variant="subtitle1">
                                                        Updated 3/18
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} lg={6} justify="space-around">
                                                    <Button
                                                        type="button"
                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.button}>
                                                        Generate template
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12} lg={6} justify="space-around">
                                                    <Button
                                                        type="button"
                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.button}>
                                                        Generate final doc
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12} lg={6} justify="space-around">
                                                    <Typography component="span" variant="subtitle2" style={{ color: 'gray' }}>
                                                        Last generated template: <SVG src={require('images/icons/attach.svg')} className={classes.attach} />
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} lg={6} justify="space-around">
                                                    <Typography component="span" variant="subtitle2" style={{ color: 'gray' }}>
                                                        Last generated final doc: none
                                                    </Typography>
                                                </Grid>
                                            </Grid>

                                        </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card className={classes.cards}>
                                        <CardContent>
                                            <Typography component="subtitle1" style={{fontWeight: 'bold'}}>
                                                SFROGS
                                            </Typography>
                                            <Grid container spacing={2} className={classes.body}>
                                                <Grid item xs={12} justify="space-between">
                                                    <Typography component="span" variant="subtitle1">
                                                        <span style={{ marginRight: '14px', color: 'blue' }}>22</span>Questions in the uploaded doc
                                                    </Typography>
                                                    <Typography component="span" variant="subtitle1">
                                                        Uploaded 3/23
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} justify="space-between">
                                                    <Typography component="span" variant="subtitle1">
                                                        <span style={{ marginRight: '10px', color: 'blue' }}>15</span> Questions sent to client
                                                    </Typography>
                                                    <Typography component="span" variant="subtitle1">
                                                        Sent 3/28
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} justify="space-between">
                                                    <Typography component="span" variant="subtitle1">
                                                        <span style={{ marginRight: '14px', color: 'blue' }}>22</span>Responded by client
                                                    </Typography>
                                                    <Typography component="span" variant="subtitle1">
                                                        Updated 4/03
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} justify="space-between">
                                                    <Typography component="span" variant="subtitle1">
                                                        <span style={{ marginRight: '14px', color: 'blue' }}>20</span>Responses finalized
                                                    </Typography>
                                                    <Typography component="span" variant="subtitle1">
                                                        Updated 3/18
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} lg={6} justify="space-around">
                                                    <Button
                                                        type="button"
                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.button}>
                                                        Generate template
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12} lg={6} justify="space-around">
                                                    <Button
                                                        type="button"
                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.button}>
                                                        Generate final doc
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12} lg={6} justify="space-around">
                                                    <Typography component="span" variant="subtitle2" style={{ color: 'gray' }}>
                                                        Last generated template: <SVG src={require('images/icons/attach.svg')} className={classes.attach} />
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} lg={6} justify="space-around">
                                                    <Typography component="span" variant="subtitle2" style={{ color: 'gray' }}>
                                                        Last generated final doc: none
                                                    </Typography>
                                                </Grid>
                                            </Grid>

                                        </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card className={classes.cards}>
                                        <CardContent>
                                            <Typography component="subtitle1" style={{fontWeight: 'bold'}}>
                                                RFPD
                                            </Typography>
                                            <Grid container spacing={2} className={classes.body}>
                                                <Grid item xs={12} justify="space-between">
                                                    <Typography component="span" variant="subtitle1">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} justify="space-around">
                                                    <Button
                                                        type="button"
                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.button}>
                                                        Upload doc
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>

                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card className={classes.cards}>
                                        <CardContent>
                                            <Typography component="subtitle1" style={{fontWeight: 'bold'}}>
                                                RFA
                                            </Typography>
                                            <Grid container spacing={2} className={classes.body}>
                                                <Grid item xs={12} justify="space-between">
                                                    <Typography component="span" variant="subtitle1">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} justify="space-around">
                                                    <Button
                                                        type="button"
                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.button}>
                                                        Upload doc
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid >);
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