$(document).ready(function () {
    $("#homeID").click(function () {
        $('#animation').attr('class', 'animation start-home');
    });

    $("#academicID").click(function () {
        $('#animation').attr('class', 'animation start-academic');
    });

    $("#projectsID").click(function () {
        $('#animation').attr('class', 'animation start-projects');
    });

    $("#hobbiesID").click(function () {
        $('#animation').attr('class', 'animation start-hobbies');
    });
});
