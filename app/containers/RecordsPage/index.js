/**
 * 
 * Records Page
 * 
 */



import React, { useEffect, memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TableWrapper from 'components/TableWrapper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function (name, path, columns, actions, selectors) {
    
    const {
        selectLoading,
        selectRecords,
        selectError
    } = selectors;

    function RecordsPage(props) {
        const { dispatch, records, children, location } = props;

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [id, setId] = useState('');

        const [client_id, setClientId] = useState('');
        const [case_title, setCaseTitle] = useState('');
        const [case_number, setCaseNumber] = useState('');

        const start_date = new Date();
        const status = "new";

        useEffect(() => {
            dispatch(actions.loadRecords());
        }, []);

        // return (<Grid container>
        //     <Grid item xs={12}>
        //     <Typography component="h1" variant="h5">
        //     {name}
        //   </Typography>
        //   </Grid>
        //     <Grid item xs={12}>
        //         <TableWrapper
        //             records={records}
        //             columns={columns}
        //             children={children}
        //             path={path}
        //             name={name}
        //             locationState={location.state}
        //         />
        //     </Grid>
        //     <Grid item xs={12}>
        //         {children}
        //     </Grid>
        // </Grid>)

        return(<div>
            <h1>Welcome to Create Record Page</h1>
            <form>
                <div>
                    <label>name:</label>
                    <input name="name" type="text" onChange={(e) => setName(e.target.value)}  />
                </div>
                <div>
                    <label>email:</label>
                    <input name="email" type="text" onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div>
                    <label>phone:</label>
                    <input name="phone" type="text" onChange={(e) => setPhone(e.target.value)}  />
                </div>
                <div>
                    <label>id:</label>
                    <input name="id" type="text" onChange={(e) => setId(e.target.value)}  />
                </div>

                <div>
                    <label>Client id:</label>
                    <input name="client_id" type="text" onChange={(e) => setClientId(e.target.value)}  />
                </div>

                <div>
                    <label>Case Title:</label>
                    <input name="case_title" type="text" onChange={(e) => setCaseTitle(e.target.value)}  />
                </div>

                <div>
                    <label>Case Number:</label>
                    <input name="case_number" type="text" onChange={(e) => setCaseNumber(e.target.value)}  />
                </div>

             

                <button type="button" onClick={() => props.dispatch(path=='\clients'?actions.createRecord({name,email,phone}): actions.createRecord({client_id,case_title,case_number,start_date,status}))} >Create</button>
                <button type="button" onClick={() => props.dispatch(path=='\clients'?actions.updateRecord({name,email,phone,id}): actions.updateRecord({client_id,case_title,case_number,id}))} >Update</button>

                <button type="button" onClick={() => props.dispatch(actions.createRecord({name,email,phone}))} >Client Create</button>
                <button type="button" onClick={() => props.dispatch(actions.updateRecord({name,email,phone,id}))} >Client Update</button>

            </form>
        </div>)

    }

    RecordsPage.propTypes = {
        loading: PropTypes.bool,
        error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
        records: PropTypes.array,
    };

    const mapStateToProps = createStructuredSelector({
        loading: selectLoading(),
        records: selectRecords(),
        error: selectError(),
    });

    function mapDispatchToProps(dispatch) {
        return {
            dispatch
        };
    }

    const withConnect = connect(
        mapStateToProps,
        mapDispatchToProps,
    );


    return compose(
        withConnect,
        memo
    )(RecordsPage);

}