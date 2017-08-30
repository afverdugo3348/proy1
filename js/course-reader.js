  /* global $ */
  "use strict"
  function agregarCurso(cid) {
    var course = $("<div class='course col-sm-4'>");
    course.append(
      $("<div class='name'>")
      	.append($("<h1>")
      		.text(cid.nombre)));
        
    course.append(
      $("<div class='description'>")
        .text(cid.descripcion));
    course.append(
      $("<div class='profesor'>")
        .text(cid.profesor));
	course.append(
      $("<div class='semestre'>")
        .text(cid.semestre));



    return course;
  }


  $.getJSON("./carrer1.json", function (data) {

   	function onSearch() {

   		var semester = $("#search").prop("value");
   		var result =data.filter(function (c){return c.Semestre==semester});   		
    	$("#cursos").html("");    
    	result.forEach(function (curso) {
    	$("#cursos").append(agregarCurso(curso));});
    }

    $("#cursos").html("");    
    data.forEach(function (curso) {
      $("#cursos").append(agregarCurso(curso));

    });

    $("#search").change(onSearch);
  });