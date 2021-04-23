import * as yup from 'yup'

export default yup
.object().shape({
    username: yup.string().min(3, `Username must be at least 3 characters`),
    email: yup.string(),
    password: yup.string(),
    ToS: yup.boolean().oneOf([true], 'You must accept the ToS')
})

