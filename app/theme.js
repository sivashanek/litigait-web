

import { createMuiTheme } from '@material-ui/core/styles';




const theme = createMuiTheme({
    typography: {
        "fontFamily": "Avenir-Regular",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        h5: {
            "fontFamily": "Avenir-Bold",
            "textTransform": "Capitalize"
        }
    },
});



export default theme;