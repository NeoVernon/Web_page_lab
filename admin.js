$(document).ready(function (){
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#img').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
$("input[type=file]").change(function(){
    readURL(this);
});
$(document).on("click", "#send_news", function (){
        $('#img').attr('src', "img/camera.png");
        $("#descr").val("");
        $("#title").val("");
    })
});
