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
        children: PropTypes.object,
        path: PropTypes.string,
        locationState: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { records, columns, children, path, locationState = {} } = this.props;
        const activePath = location.pathname;
        const tableColumns = columns.filter((column) => column.visible);

        let rows = records.map((record) => Object.assign(
            {},
            record, {
            onClickHandler: this.handleClick.bind(this, record.id, locationState),
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
                                src={`${row[column.value] || 'https://s3.amazonaws.com/ds-static.spfr.co/img/placeholder.jpg'}`}
                                role="presentation" style={{ height: 64, padding: 4 }}
                            />,
                        },
                    ));
                    break;
                default:
                    break;
            }
        });

        return (
            <Grid container>
                <Grid item sm={12}>
                    <SpicyDatatable
                        tableKey={path}
                        config={{ itemsPerPageOptions: [25, 50, 100] }}
                        columns={tableColumns.map((column) => Object.assign(
                            {},
                            { key: column.value, label: column.label }
                        ))}
                        rows={rows}
                    />
                </Grid>
            </Grid>
        );
    }

    handleClick(id, locationState) {
        const { path } = this.props;

    }


}

export default TableWrapper;
