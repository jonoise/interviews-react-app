// This file contains the logic behind the validation of inputs in the Register form. It handles everything
// to successfuly validate user input and display errors on the screen.  

// VALIDATION MANAGER
const ValidationManager = (currentInput, currentValue, currentValidDataState, setValidDataState, userData) => {
    switch (currentInput) {
        case "email":
            validateEmail(currentValue, currentValidDataState, setValidDataState);
            break;
        case "password1":
            validatePassword(currentValue, currentValidDataState, setValidDataState);
            break;
        case "password2":
            matchingPasswords(currentValue, currentValidDataState, setValidDataState, userData);
            break;
        default:
            break;
    }
};

// EMAIL VALIDATION FUNCTION
const validateEmail = (currentValue, currentValidDataState, setValidDataState) => {
    let email = validateEmailStructure(currentValue)
    changeEmailState(email, currentValidDataState, setValidDataState)
}
// PASSWORD VALIDATION FUNCTION
const validatePassword = (currentValue, currentValidDataState, setValidDataState) => {
    let len = validatePasswordLength(currentValue)
    let num = containNumbers(currentValue)
    changePassState(len, num, currentValidDataState, setValidDataState)
}

// PASSWORD MATCHING VALIDATION FUNCTION
const matchingPasswords = (currentValue, currentValidDataState, setValidDataState, userData) => {
    let match = matchBothPasswords(currentValue, userData)
    changeConfirmationPassState(match, currentValidDataState, setValidDataState)

}

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


////////////////////////////////////// 
// PASS VALIDATION HELPER FUNCTIONS //
////////////////////////////////////// 

const validatePasswordLength = (currentValue) => {
    if (currentValue.trim().length >= 8) {
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

//////////////////////////////////// 
// PASS MATCHING HELPER FUNCTIONS //
//////////////////////////////////// 
const matchBothPasswords = (currentValue, currentValidDataState) => {

    if (currentValidDataState.password1 === currentValue) {
        return true;
    } else return false;
};

const changeConfirmationPassState = (match, currentValidDataState, setValidDataState) => {
    if (match) {
        setValidDataState({
            ...currentValidDataState,
            matchingPasswords: true,
        });
    } else {
        setValidDataState({
            ...currentValidDataState,
            matchingPasswords: false,
        });
    }
};

export default ValidationManager