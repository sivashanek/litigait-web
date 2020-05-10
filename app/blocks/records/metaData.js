
/*
 *
 *   metaData
 *
 */

function mapCases(metaData){
    if(metaData){
        const { clients = []} = metaData;
        const clientsOptions = clients.map(c => Object.assign({}, {label: c.name, value: c.id}));
        return Object.assign({}, metaData, {clientsOptions})
    }
    return metaData;
}




export default function mapRecordsMetaData(metaData, name) {
    switch (name) {
        case 'cases':
            return mapCases(metaData);
        default:
            return metaData;
    }
}
