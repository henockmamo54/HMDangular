
function getRelativeDateFromNow(date){
    if(date === '0001-01-01T00:00:00') {
       return '';
    }
    return moment(date).fromNow();
}