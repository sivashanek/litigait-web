



export default function() {

    function clients(){
        return {
            columns: [
                {
                    id: 1,
                    value: 'name',
                    label: 'NAME',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: true,
                    visible: true,
                    type: 'input'
                },
                {
                    id: 2,
                    value: 'email',
                    label: 'EMAIL',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: true,
                    visible: true,
                    type: 'input'
                },
                {
                    id: 3,
                    value: 'registeredDate',
                    label: 'REGISTERED DATE',
                    editRecord: false,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'date'
                },
                {
                    id: 4,
                    value: 'id',
                    label: 'ID',
                    editRecord: false,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'input'
                },
                {
                    id: 5,
                    value: 'phone',
                    label: 'PHONE',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    number: true,
                    visible: true,
                    type: 'input'
                },
                {
                    id: 6,
                    value: 'address',
                    label: 'ADDRESS',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'input'
                },
                {
                    id: 7,
                    value: 'termsAccepted',
                    label: 'TERMS ACCEPTED',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'checkbox'
                },
                {
                    id: 8,
                    value: 'caseCount',
                    label: 'CASE COUNTED',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'input'
                }
            ]
        }
    }

    function cases() {
        return {
            columns: [
                {
                    id: 1,
                    value: 'clientName',
                    label: 'CLIENT NAME',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: true,
                    visible: true,
                    type: 'input'  
                },
                {
                    id: 2,
                    value: 'id',
                    label: 'ID',
                    editRecord: false,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'input'  
                },
                {
                    id: 3,
                    value: 'startDate',
                    label: 'START DATE',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'date'  
                },
                {
                    id: 4,
                    value: 'caseTitle',
                    label: 'CASE TITLE',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'input'  
                },
                {
                    id: 5,
                    value: 'status',
                    label: 'STATUS',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    oneOf: ['New', 'Active', 'Closed'],
                    type: 'select'  
                }
            ]
        }
    }

    function orders(){
        return {
            columns: [
                {
                    id: 1,
                    value: 'id',
                    label: 'ID',
                    editRecord: false,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'input' 
                },
                {
                    id: 2,
                    value: 'orderDate',
                    label: 'ORDER DATE',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'date' 
                },
                {
                    id: 3,
                    value: 'caseId',
                    label: 'CASE ID',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'input' 
                },
                {
                    id: 4,
                    value: 'products',
                    label: 'PRDUCTS',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'input' 
                },
                {
                    id: 5,
                    value: 'status',
                    label: 'STATUS',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    oneOf: ['New', 'Active', 'Closed'],
                    type: 'select' 
                }
            ]
        }
    }


    return {
        clients,
        cases,
        orders
    }
}