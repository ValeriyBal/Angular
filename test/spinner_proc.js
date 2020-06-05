<!-- // id="spinner_process" // -->

if(gEBI('CancelFlag').value > 1) {
    set_associated_fields(this)
};
if(this.value=='') { 
    if (gEBI('CancelFlag').value > 1) {
        processActionAlwaysDelay('SignPsevdo', gEBI('TimeOut').value*1000)
    } else {
            gEBI('CancelFlag').value = 0
        } 
    };
if(this.value=='') {
    gEBI('EmptyList').value = 0
} else {
    gEBI('EmptyList').value = 1; set_associated_fields(this);
}

<!-- // id="FlagActionOK" // -->

if (gEBI('CancelFlag').value > 1) {
    set_associated_fields(this)
};
if (gEBI('EmptyList').value > 0) {
    processActionAlways('SignPsevdo')
}
