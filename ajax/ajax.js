
$(function(){
    $("#get").click(function(){
        $.get("http://localhost:9000/student/1", function(data, status){
        	
             $(".table").append("<tr><td>"+data.id+"</td><td>"+data.name+"</td><td>"+data.email+"</td></tr>");
        });
    });
    $("#post").click(function(){
        $.post("http://localhost:9000/student/all", function(data, status){

                for(var i=0;i<data.length;i++){
                    $(".table").append("<tr><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].email+"</td></tr>");
                }
                
        });
    });

    $("#save").click(function(){
	var id = parseInt($("#id").val())
	    var name = $('#fname').val();

            var email = $('#email').val();

            $.ajax({
              url: "http://localhost:9000/student/save",
              type: "POST",
              data: JSON.stringify({"id":id,"name":name,"email":email}),
              contentType: "application/json",
              dataType: "json",
              success: function(data, status){
                 alert(data)
              }
            });
    });

});
