/**
*
* TableWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import SpicyDatatable from 'spicy-datatable';
import Grid from '@material-ui/core/Grid';

class TableWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        records: PropTypes.array,
        columns: PropTypes.array,
        children: PropTypes.bool,
        path: PropTypes.string,
        locationState: PropTypes.object,
        disableClickList: PropTypes.bool
    };


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { records, columns, children, path, locationState = {}, disableClickList } = this.props;
        const activePath = location.pathname;
        const tableColumns = children ? columns.filter((column) => column.visible && column.viewMode) : columns.filter((column) => column.visible);

        let rows = records.map((record) => Object.assign(
            {},
            record, {
            onClickHandler: this.handleClick.bind(this, record.id, locationState, disableClickList),
            isActive: activePath === `${path}/${record.id}` || activePath === `${path}/${record.id}/edit`,
        }),
        );

        tableColumns.forEach((column) => {
            switch (column.type) {
                case 'image':
                    rows = rows.map((row) => Object.assign(
                        row,
                        {
                            [column.value]:
                            <img
                                src={`${row[column.value] || ''}`}
                                role="presentation" style={{ height: 64, padding: 4 }}
                            />,
                        },
                    ));
                    break;
                default:
                    rows = rows.map((row) => Object.assign(
                        row,
                        {
                            [column.value]:
                            <span style={column.style || null}>{row[column.value] || ''}</span>,
                        },
                    ));
                    break;
            }
        });

        return (
            <Grid container>
                <Grid item xs={12}>
                    <SpicyDatatable
                        tableKey={path}
                        config={{ itemsPerPageOptions: [25, 50, 100] }}
                        columns={tableColumns.map((column) => Object.assign(
                            {},
                            { key: column.value, label: column.sort?column.label+'⇅':column.label, sort: column.sort }
                        ))}
                        rows={rows}
                    />
                </Grid>
            </Grid>
        );
    }

    handleClick(id) {
        if(this.props.disableClickList) return;
        const { path, history } = this.props;
        if(id)
            history.push(path.indexOf('cases') > -1 ? `${path}/${id}/form` : `${path}/${id}`);
    }


}

export default TableWrapper;
