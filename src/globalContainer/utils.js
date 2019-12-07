const footerIconOptions = [
        {imageIcon: 'pay-dues.png', url: '/pay-dues', header: 'Pay Dues'},
        {imageIcon: 'credit.png', url: '/avail-credit', header: 'Avail Credit'},
        {imageIcon: 'home.png', url: '/home', header: 'Home'},
        {imageIcon: 'user.png', url: '/user', header: 'Profile'},
    ]

    const base_url = 'http://localhost:3050'

    const genderOptions = [
        {label: 'Male', value: 'Male'},
        {label: 'Female', value: 'Female'},
        {label: 'Others', value: 'Others'},
    ]

    const maritalStatus = [
        {label: 'Single', value: 'single'},
        {label: 'Married', value: 'married'}
    ]

    const signUpPayloadKeys = ['full_name', 'dob', 'phone_number', 'address', 'gender', 'marital_status', 'email_id', 'password', 'referral_code']

    const creditEligibilityMapper = {
        E1: 'Low',
        E2: 'Medium',
        E3: 'High',
        NE: 'Not Eligible'
    }

export {
    footerIconOptions,
    base_url,
    genderOptions,
    maritalStatus,
    signUpPayloadKeys,
    creditEligibilityMapper
}
