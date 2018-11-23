function calculator(actionType, a, b) {
    if (typeof a == "number" && typeof b == "number") {
        switch (actionType) {
            case 'add':
                console.log('addition is: ', a + b);
                break;
            case 'minus':
                console.log('subtraction is: ', a - b);
                break;

            case 'multiply':
                console.log('multiplication is: ', a * b);
                break;

            case 'divided':
                console.log('division is: ', a / b);
                break;
            default:
                console.log('operation is terminatted due to wrong value');
                break;


        }
    }
    else {
        console.log('not a number');
    }

}
calculator("minus", 10, 20);