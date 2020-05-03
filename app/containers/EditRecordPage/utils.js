



export default function (name, record) {
    let Record = Object.assign({}, record);
    if(name === 'clients.edit'){
        Record.hipaa_acceptance_status = record.hipaa_acceptance_status && record.hipaa_acceptance_status === 'All' ? true : record.hipaa_acceptance_status && record.hipaa_acceptance_status === 'Pending' ? false : record.hipaa_acceptance_status || false;
    } 
    return Record; 
}
