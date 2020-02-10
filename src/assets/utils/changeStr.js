
const changeStr = (strVariable, arr) => {
    const res = arr.toString().match(/[2-9]1/);
    if (arr === 1 || res) {
        return strVariable[0]
    }
    return strVariable[1]

}
export default changeStr