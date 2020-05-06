
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
            // Record.terms_accepted  = record.hipaa_acceptance_status && record.fee_acceptance_status ? 'All' : 'Pending'
            Record.terms_accepted  = getTermsAccepted(record.hipaa_acceptance_status, record.fee_acceptance_status);

            return Record;
        });
    }
    return records;
}

function getTermsAccepted(hipaa_acceptance_status, fee_acceptance_status){
    if(hipaa_acceptance_status && fee_acceptance_status){
        return "All";
    }
    if(!hipaa_acceptance_status && !fee_acceptance_status){
        return "Pending";
    }
    if(!hipaa_acceptance_status){
        return "Pending Hipaa";
    }
    if(!fee_acceptance_status){
        return "Pending Fee";
    }
    return '';
}

export function mapCases(records) {

    if (records && records.length > 0) {
        return records.map((record) => {
            record.start_date = record.start_date && moment(record.start_date).format('MM/DD/YYYY') || false;
            record.status = changeStatus(record.status);
            return record;
        });
    }
    return records;

}

export function changeStatus(status){
    if(status=='new') return 'New';
    if(status=='active') return 'Active';
    if(status=='close') return 'Closed';
    return;
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
