let data = 0;

function add() {
    data = Math.max(data, Math.floor(Math.random() * 1000))
}

function sub() {
    data = Math.min(data, Math.floor(Math.random() * 1000))
}

function getCurrentValue() {
    return data
}

export { add, sub, getCurrentValue }