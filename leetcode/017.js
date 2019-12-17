let dfs = (digits, m, len, curr, ans) => {
    if (len === digits.length) {
        ans.push(curr)
        return
    }
    for (let char of m.get(parseInt(digits[len]))) {
        curr += char
        dfs(digits, m, len+1, curr, ans)
        curr = curr.slice(0, -1)
    }
}

let letterCombinations = function(digits) {
    if (digits == '') return []
    // init charset 
    let alphabat ="abcdefghijklmnopqrstuvwxyz"
    let m = new Map()
    let number = 2
    for (let i = 0; i < alphabat.length; i+=3) {
        if (i === 15 || i === 22) {
            m.set(number++, [alphabat[i], alphabat[i+1], alphabat[i+2], alphabat[i+3]])
            i += 1
        } else {
            m.set(number++, [alphabat[i], alphabat[i+1], alphabat[i+2]])
        }
    }
    // procedure
    let curr = ''
    let ans = []
    dfs(digits, m, 0, curr, ans)
    return ans
}

console.log(letterCombinations("23"))