function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = n - i;
        let steps = i;
        let line = '';
        
        for (let j = 0; j < spaces; j++) {
            line += ' ';
        }
        
        for (let k = 0; k < steps; k++) {
            line += '#';
        }
        
        console.log(line);
    }
}
