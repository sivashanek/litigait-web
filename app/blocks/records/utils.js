
/*
 *
 *  utils
 *
 */

import moment from 'moment'


export function mapClients(records) {
    if (records && records.length > 0) {
        return records.map((record) => {
            let Record = Object.assign({}, record);
            Record.createdAt = record.createdAt && moment(record.createdAt).format('MM/DD/YYYY') || false;
            Record.dob = record.dob && moment(record.dob).format('MM/DD/YYYY') || false;
            Record.terms_accepted  = record.hipaa_acceptance_status && record.fee_acceptance_status ? 'All' : 'Pending'
            return Record;
        });
    }
    return records;
}


export function mapCases(records) {

    if (records && records.length > 0) {
        return records.map((record) => {
            record.startDate = record.startDate && moment(record.startDate).format('MM/DD/YYYY') || false;
            return record;
        });
    }
    return records;

}

export function mapOrders(records) {

    if (records && records.length > 0) {
        return records.map((record) => {
            record.orderDate = record.orderDate && moment(record.orderDate).format('MM/DD/YYYY') || false;
            return record;
        });
    }
    return records;

}



export default function mapRecords(records, name) {
    switch (name) {
        case 'clients':
            return mapClients(records);
        case 'cases':
            return mapCases(records);
        case 'orders': 
            return mapOrders(records);    
        default:
            return records;
    }
}
