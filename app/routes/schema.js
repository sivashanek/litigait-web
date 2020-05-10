



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
                    sort: true,
                    type: 'input',
                    mandatory: true
                },
                {
                    id: 2,
                    value: 'email',
                    label: 'EMAIL',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: true,
                    visible: true,
                    type: 'input',
                    mandatory: true
                },
                {
                    id: 3,
                    value: 'createdAt',
                    label: 'REGISTERED DATE',
                    editRecord: false,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    sort: true,
                    type: 'date'
                },
                {
                    id: 4,
                    value: 'id',
                    label: 'ID',
                    editRecord: false,
                    viewRecord: false,
                    viewMode: false,
                    visible: false,
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
                    type: 'number'
                },
                {
                    id: 6,
                    value: 'dob',
                    label: 'BIRTHDATE',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: false,
                    type: 'date'
                },
                {
                    id: 7,
                    value: 'address',
                    label: 'ADDRESS',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'input'
                },
                {
                    id: 8,
                    value: 'fee_acceptance_status',
                    label: 'FEE ACCEPTANCE',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: false,
                    type: 'checkbox'
                },
                {
                    id: 9,
                    value: 'hipaa_acceptance_status',
                    label: 'HIPPA ACCEPTANCE',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: false,
                    type: 'checkbox'
                },
                {
                    id: 10,
                    value: 'terms_accepted',
                    label: 'TERMS ACCEPTED',
                    editRecord: false,
                    viewRecord: false,
                    viewMode: false,
                    visible: true,
                    type: 'checkbox'
                },
                
                {
                    id: 11,
                    value: 'caseCount',
                    label: 'CASE COUNT',
                    editRecord: false,
                    viewRecord: true,
                    viewMode: false,
                    visible: false,
                    type: 'number'
                }
            ]
        }
    }

    function cases() {
        return {
            columns: [
                {
                    id: 1,
                    value: 'client_name',
                    label: 'CLIENT NAME',
                    editRecord: false,
                    viewRecord: false,
                    viewMode: true,
                    visible: true,
                    sort: true,
                    type: 'input'  
                },
                {
                    id: 2,
                    value: 'client_id',
                    label: 'CLIENT NAME',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: false,
                    options: 'clientsOptions',
                    mandatory: true,
                    type: 'select'  
                },
                {
                    id: 3,
                    value: 'id',
                    label: 'ID',
                    editRecord: false,
                    viewRecord: false,
                    viewMode: false,
                    visible: false,
                    type: 'input'  
                },
                {
                    id: 4,
                    value: 'start_date',
                    label: 'START DATE',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    sort: true,
                    type: 'date'  
                },
                {
                    id: 5,
                    value: 'case_title',
                    label: 'CASE TITLE',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: true,
                    visible: true,
                    type: 'input',
                    mandatory: true
                },
                {
                    id: 6,
                    value: 'case_number',
                    label: 'CASE NUMBER',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: false,
                    type: 'number',
                    mandatory: true  
                },
                {
                    id: 7,
                    value: 'status',
                    label: 'STATUS',
                    editRecord: true,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    style: {textTransform: 'capitalize'},
                    options: [
                        {
                            value: 'new',
                            label: 'New'
                        },
                        {
                            value: 'active',
                            label: 'Active'
                        },
                        {
                            value: 'closed',
                            label: 'Closed'
                        }
                    ],
                    type: 'select',
                    mandatory: true  
                },
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
                    editRecord: false,
                    viewRecord: true,
                    viewMode: false,
                    visible: true,
                    type: 'date' 
                },
                {
                    id: 3,
                    value: 'caseId',
                    label: 'CASE ID',
                    editRecord: false,
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

    function filterColumns() {
        return {
            clients: {
                value: 'terms_accepted',
                options: [
                    {
                        value: '',
                        label: 'Terms Accepted'
                    },
                    {
                        value: 'All',
                        label: 'All'
                    },
                    {
                        value: 'Pending',
                        label: 'Pending'
                    },
                    {
                        value: 'Pending HIPAA',
                        label: 'Pending HIPAA'
                    },
                    {
                        value: 'Pending Fee Terms',
                        label: 'Pending Fee Terms'
                    },
                ]
            },
            cases: {
                value: 'status',
                options: [
                    {
                        value: '',
                        label: 'Status',
                        // disabled: true
                    },
                    {
                        value: 'new',
                        label: 'New'
                    },
                    {
                        value: 'active',
                        label: 'Active'
                    },
                    {
                        value: 'closed',
                        label: 'Closed'
                    }
                ]
            },
            orders: {
                value: 'status',
                options: [
                    {
                        value: '',
                        label: 'Status',
                        disabled: true
                    },
                    {
                        value: 'New',
                        label: 'New'
                    },
                    {
                        value: 'Active',
                        label: 'Active'
                    },
                    {
                        value: 'Closed',
                        label: 'Closed'
                    }
                ]
            }
        }
    }


    return {
        clients,
        cases,
        orders,
        filterColumns
    }
}