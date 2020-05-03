


export default function(columns){
    let Columns = columns && Object.assign([], columns);
    return Columns.reduce((a, el)=> el.defaultValue ? Object.assign({}, {[el.value]: el.defaultValue}): a, {});
}