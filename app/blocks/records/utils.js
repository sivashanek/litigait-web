
import moment from 'moment'





export function mapClients(records) {
    if (records && records.length > 0) {
        return records.map((record) => {
            record.createdAt = record.createdAt && moment(record.createdAt).format('DD/MM/YYYY') || false;
            record.hipaa_acceptance_status  = record.hipaa_acceptance_status && record.fee_acceptance_status ? 'All' : false
            return record;
        });
    }
    return records;
}


export function mapCases(records) {

    if (records && records.length > 0) {
        return records.map((record) => {
            record.startDate = record.startDate && moment(record.startDate).format('DD/MM/YYYY') || false;
            return record;
        });
    }
    return records;

}

export function mapOrders(records) {

    if (records && records.length > 0) {
        return records.map((record) => {
            record.orderDate = record.orderDate && moment(record.orderDate).format('DD/MM/YYYY') || false;
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
