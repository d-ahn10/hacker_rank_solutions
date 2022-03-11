function timeConversion(s) {
    let sTimeArr = s.split(':');
    let hours = parseInt(sTimeArr[0]);
    let meridiem = sTimeArr[2];
    let flag = false;
    
    if (meridiem.includes('PM') && hours !== 12) {
        hours += 12;
        if (hours === 24) {
            hours = '00';
        } else {
            hours.toString(); 
        }
        flag = true;
    }
    
    if (meridiem.includes('AM') && hours === 12) {
        hours = '00';
        flag = true;
    }
    
    if (flag) {
        sTimeArr[0] = hours;
        return sTimeArr.join(':').slice(0, s.length - 2);
    }

    return s.slice(0, s.length - 2);
}

