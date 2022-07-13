function demoAlertExternal() {
    alert('Welcome to Ahmedabad');
}

function demoConfirmExternal() {
    if(confirm('Are You Sure...!?')){
        alert('yes');
    }
    else{
        alert('no');
    }
}

function demoPromptExternal() {
    var fName=prompt('Enter Your First Name...');
    var lName=prompt('Enter Your Last Name...');

    alert(fName+" "+lName);
}