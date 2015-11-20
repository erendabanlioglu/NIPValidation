function isNIPValid(nip) {
    var weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    nip = nip.replace(/[\s-]/g, '');

    if (nip.length == 10 && parseInt(nip, 10) > 0) {
            var sum = 0;
            for(var i = 0; i < 9; i++){
                    sum += nip[i] * weights[i];
            }
            return (sum % 11) == nip[9];
    }
    return false;
}
