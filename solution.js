function letterCombinations(input_digits) {
    if(input_digits.length==0) return[];
    const map = { '2' : 'abc', '3' : 'def', '4' : 'ghi',
                   '5' : 'jkl', '6' : ',mno', '7' : 'pqrs',
                   '8' : 'tuv', '9' : 'wxyz',};
           const queue=[''];
           for(const digit of input_digits){
             const len = queue.length;
             for( let i=0; i<len; i++) {
              const current = queue.shift();
              map[digit].split('').forEach(i => queue.push(current+i));
             }
           }
           return queue
  //Complete the function
};

module.exports = letterCombinations;
