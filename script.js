document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const mark = parseInt(document.getElementById("marksInput").value);
    let grade = '';
    let passStatus = '';
    
    if (mark >= 90 && mark <= 100) {
        grade = 'A+';
    } else if (mark >= 80 && mark < 90) {
        grade = 'A';
    } else if (mark >= 70 && mark < 80) {
        grade = 'B+';
    } else if (mark >= 60 && mark < 70) {
        grade = 'B';
    } else if (mark >= 50 && mark < 60) {
        grade = 'C+';
    } else if (mark >= 40 && mark < 50) {
        grade = 'C';
    } else if (mark >= 30 && mark < 40) {
        grade = 'D+';
    } else if (mark >= 20 && mark < 30) {
        grade = 'D';
    } else if (mark < 20) {
        grade = 'E';
    } else {
        grade = 'Invalid marks';
    }

    if (mark >= 30) {
        passStatus = 'Passed';
    } else {
        passStatus = 'Failed';
    }

    document.getElementById("resultField").value = `Grade: ${grade} - ${passStatus}`;
});
