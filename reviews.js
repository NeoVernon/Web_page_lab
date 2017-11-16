    function addResponse(){
      var responseText = document.getElementById("comment");
      var nameText = document.getElementById("nameSurname");
      if(nameText.value == ""){
        alert("ім'я");
        return;
      }
      if(responseText.value == ""){
        alert("відгук!");
        return;
      }
      var responseField = document.getElementById("newResponseField");
      var element = document.getElementById("responses");
      var responseRow = document.createElement("div");
      responseRow.setAttribute("class", 'row');
      var responseCol = document.createElement("div");
      responseCol.setAttribute("class", "col-lg");
      var responseHeader = document.createElement("p");
      var responseFill = document.createElement("p");
      var responseHeaderName = document.createElement("span");
      responseHeaderName.setAttribute("class", "h2 pull-left");
      var responseHeaderDate = document.createElement("span");
      var responseHeaderDateItalic = document.createElement("i");
      var date = new Date();
      var dateString = "";
      dateString = date.getDate() + "." + date.getMonth() + "." + (date.getFullYear())
        + ", " + date.getHours() + ":" + date.getMinutes();
      responseHeaderDateItalic.innerHTML = dateString;
      responseHeaderName.innerHTML = nameText.value + " ";
      responseFill.innerHTML = responseText.value;
      responseHeaderDate.appendChild(responseHeaderDateItalic);
      responseHeader.appendChild(responseHeaderName);
      responseHeader.appendChild(responseHeaderDate);
      responseCol.appendChild(responseHeader);
      responseCol.appendChild(responseFill);
      responseRow.appendChild(responseCol);
      element.insertBefore(responseRow, responseField);
      element.insertBefore(document.createElement("hr"), responseField);
      responseText.value = "";
      nameText.value = "";
    }
  </script>
  <script src="js/jquery-3.2.1.slim.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.js"></script>
  </body>
</html>
