function countingValleys(steps, path) {
    // iterate the number of steps taken by the path
    // we'll keep track of this using numbers
    // for example any negative number will be tied to D
    // any positive number will be tied to U
    // 0 will be sea level
    
    // 1. create a counter to keep track of valleys
    // 2. iterate through path based on steps
    // 3. increment or decrement counter accordingly
    // 4. every time 0 is hit during iteration from a negative, increase valley counter            by 1
    // 5. after iteration return the valley counter number
    
    let valleyCounter = 0;
    let stepCounter = 0;
    
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'D') {
            stepCounter--;
        } else {
            stepCounter++;
            if (stepCounter === 0) {
            valleyCounter++;
            }
        }
    }
    
    return valleyCounter;
}
