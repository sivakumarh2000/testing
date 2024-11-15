const falsyValue = [0, 'hello', false, 42, '', null, 'world'];

const removeFalsy = () => {
    return falsyValue.filter(Boolean);
    //    return falsyValue.filter((item) => {
    //     return !!item;
    //     });

}
console.log(removeFalsy());
