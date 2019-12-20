var lengthOfLongestSubstring = function(s) {
    let res = ''
    let len = s.length
    let winStart = 0
    let winEnd = 0
    let set = new Set()
    let max = 0
    while(winEnd < len) {
    	if (!set.has(s[winEnd])) {
    		set.add(s[winEnd])
    		max = Math.max(max, winEnd - winStart + 1)
    		winEnd++
    	} else {
    		set.delete(s[winStart])
    		winStart++
    	}
    }
    return max
};

console.log(lengthOfLongestSubstring("bb"))