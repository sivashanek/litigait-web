const validate = (values, props) => {
  
    const requiredFields = props.fields.reduce((a, el) => {
      if (el.mandatory) {
        a.push(el.value)
      }
      return a;
    }, []);
  
    const errors = {}
  
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    return errors
  }

  export default validate;