export function isNaturalNumber (str) {
    let pattern = /^(0|([-0-9]\d*))$/;
    return pattern.test(str);
}