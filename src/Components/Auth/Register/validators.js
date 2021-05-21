// EMAIL VALIDATION FUNCTION
const validateEmail = (currentValue, currentValidDataState, setValidDataState) => {
    let email = validateEmailStructure(currentValue)
    changeEmailState(email, currentValidDataState, setValidDataState)
}

const validatePassword = (currentValue, currentValidDataState, setValidDataState) => {
    let len = validatePasswordLength(currentValue)
    let num = containNumbers(currentValue)
    changePassState(len, num, currentValidDataState, setValidDataState)
}

const matchingPasswords = (currentValue, currentValidDataState, setValidDataState) => {

}

const ValidationManager = (currentInput, currentValue, currentValidDataState, setValidDataState) => {
    switch (currentInput) {
        case "email":
            validateEmail(currentValue, currentValidDataState, setValidDataState);
            break;
        case "password1":
            validatePassword(currentValue, currentValidDataState, setValidDataState);
            break;
        case "password2":
            matchingPasswords(currentInput, currentValue);
            break;
        default:
            break;
    }
};

////////////////////////////////////// 
// PASS VALIDATION HELPER FUNCTIONS //
////////////////////////////////////// 

const validatePasswordLength = (currentValue) => {
    if (currentValue.trim().length > 8) {
        return true;
    } else return false;
};

const containNumbers = (currentValue) => {
    let regex = /\d/g;
    return regex.test(currentValue);
};

const changePassState = (func1, func2, currentValidDataState, setValidDataState) => {
    if (func1 && func2) {
        setValidDataState({
            ...currentValidDataState,
            validPassword: true,
        });
    } else {
        setValidDataState({
            ...currentValidDataState,
            validPassword: false,
        });
    }
};
/////////////////////////////////////// 
// EMAIL VALIDATION HELPER FUNCTIONS //
/////////////////////////////////////// 

const validateEmailStructure = (currentValue) => {
    const pattern = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return pattern.test(currentValue);
};

const changeEmailState = (validation, currentValidDataState, setValidDataState) => {
    if (validation) {
        setValidDataState({
            ...currentValidDataState,
            validEmail: true
        })
    } else {
        setValidDataState({
            ...currentValidDataState,
            validEmail: false
        })
    }
}

export default ValidationManager