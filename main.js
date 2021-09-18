var names = [] ;
function submit() {
    var n1 = document.getElementById("name_of_the_student_1").value;
    var n2 = document.getElementById("name_of_the_student_2").value;
    var n3 = document.getElementById("name_of_the_student_3").value;
    var n4 = document.getElementById("name_of_the_student_4").value;
    var n5 = document.getElementById("name_of_the_student_5").value;
    names.push(n1);
    names.push(n2);
    names.push(n3);
    names.push(n4);
    names.push(n5);
    console.log(names);
    document.getElementById("displayname").innerHTML=names;
    document.getElementById("submit button").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sort() {
    names.sort();
    console.log(names);
    document.getElementById("displayname").innerHTML=names;
}