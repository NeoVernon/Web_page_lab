function isOnline() {
  return window.navigator.onLine;
}

class Response{
  constructor(name, response, date){
    this.name = name;
    this.response = response;
    this.date = date;
  }
}

function addToStorage(response){
  var responses = getResponses();
    responses.push(response);
    localStorage.setItem('responses', JSON.stringify(responses));
    //show();
    return false;
}

function getResponses() {
    var responses = new Array;
    var response_item = localStorage.getItem('responses');
    if (response_item !== null) {
        responses = JSON.parse(response_item);
    }
    return responses;
}

function show(){
  if(isOnline()){
    //server stuff
  }
  var responses = getResponses();
    if ((typeof responses !== 'undefined') && (responses.length > 0)) {
      for(var i = 0; i < responses.length; i++) {
        createResponse(responses[i]);
      }
  }
}

function addResponse(){
  var responseText = document.getElementById("comment");
  var nameText = document.getElementById("name");
  var date = new Date();
  if(nameText.value == ""){
    alert("Вкажіть ваше ім'я");0
    return;
  }
  if(responseText.value == ""){
    alert("Порожній відгук!");
    return;
  }
  var response = new Response(nameText.value, responseText.value, date);
  if(isOnline()){
    //server stuff
  }
  addToStorage(response);
  createResponse(response);
  responseText.value = "";
  nameText.value = "";
}

function createResponse(response){

  var responseField = document.getElementById("newResponseField");
  var element = document.getElementById("responses");

  var date = new Date(response.date);
  var nameText = response.name;
  var responseText = response.response;
  var dateString = date.getDate() + "." + (date.getMonth() + 1) + "." + (date.getFullYear())
    + ", " + date.getHours() + ":" + date.getMinutes();

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
  responseHeaderDateItalic.innerHTML = dateString;
  responseHeaderName.innerHTML = nameText + " ";
  responseFill.innerHTML = responseText;

  responseHeaderDate.appendChild(responseHeaderDateItalic);
  responseHeader.appendChild(responseHeaderName);
  responseHeader.appendChild(responseHeaderDate);
  responseCol.appendChild(responseHeader);
  responseCol.appendChild(responseFill);
  responseRow.appendChild(responseCol);

  element.insertBefore(responseRow, responseField);
  element.insertBefore(document.createElement("hr"), responseField);
}



// var idMask = 'divId_';
//
// var useLocalStorage = true;
//
//
// window.onload = function() {
// 	if (useLocalStorage) {
// 		var online = navigator.onLine;
// 		if (online == true) {
// 			$.fn.showReviews();
// 			localStorage.clear();
// 		} else {
// 			$.fn.showReviews();
// 		}
// 	} else {
// 		$.fn.createIDB();
// 	}
// };
//
// $.fn.localStorageUsed = function() {
// 	var online = navigator.onLine;
// 	if (online == false) {
// 	    alert ("Pushed");
// 		var newDiv = $.fn.createNewDiv();
// 		var reviewId = $.fn.createReviewId();
// 		$("#comments").append(newDiv);
// 	    localStorage.setItem(idMask+reviewId, newDiv);
// 		$.fn.clearReviewInputs();
// 	} else {
// 		alert("Online");
// 		$.fn.clearReviewInputs();
// 	}
// }
//
// //Create New Review Function
// $.fn.createNewDiv = function() {
//
//         var name = document.getElementById('send_user_name').value;
// 	    var date = new Date();
// 		var dateString = "";
// 			dateString = date.getDate() + "." + (date.getMonth()+1) + "." + (date.getFullYear())
// 			+ ", " + date.getHours() + ":" + date.getMinutes();
// 		var reviewText = document.getElementById('send_review').value;
//
// 		if(name !== null && name !== '' && reviewText !==null && reviewText !== '') {
//
// 	    	var reviewId = $.fn.createReviewId();
//
// 	    	var newDiv = '<div class="review divider_bottom" data-divid="'
// 	    	+ idMask+reviewId
// 	    	+  '"><div class="user_name"><h1>'
// 	    	+ name
// 	    	+ '</h1></div>'
// 	    	+ '<div class="review_post_time"><h4>'
// 	    	+ dateString
// 	    	+ '</h4></div>'
// 	    	+ '<div class="review_text"><p>'
// 	    	+ reviewText
// 	    	+ '</p></div>';
//
// 	    	return newDiv;
// 		} else {
// 		   	$.fn.errorAlert();
// 		}
// }
//
// //Search All Existing Id And Create +1 Id Value
// $.fn.createReviewId = function() {
// 	var reviewId = 0;
// 	$('div[data-divid]').each(function() {
// 	    var jelId = $(this).attr('data-divid').slice(6);
// 	    if (jelId > reviewId)
// 			reviewId = jelId;
// 	});
// 	reviewId++;
// 	return reviewId;
// }
//
// //Show All Existing
// $.fn.showReviews = function() {
// 	var lsLen = localStorage.length;
// 	if (lsLen > 0) {
// 		for (var i = 0; i < lsLen; i++){
// 			var key = localStorage.key(i);
// 			if (key.indexOf(idMask) == 0) {
// 				$("#comments").append(localStorage.getItem(key));
// 			}
// 		}
// 	}
// }
//
// //Using LocalStorage -END-
//
//
// $.fn.createIDB = function() {
//
// 	var request = indexedDB.open('reviewsdatabase', 1);
//
// 	request.onupgradeneeded = function(e) {
// 		var db = e.target.result;
//
// 		if(!db.objectStoreNames.contains('reviews')) {
// 			var os = db.createObjectStore('reviews', { keyPath: "id", autoIncrement: true});
// 			os.createIndex('name', 'name',{unique:false});
// 		}
// 	}
//
// 	request.onsuccess = function(e) {
// 		console.log('Success opened DB')
// 		db = e.target.result;
// 		$.fn.showReviewsFromIndexDB();
// 	}
//
// 	request.onerror = function(e) {
// 		console.log('Error with DB open')
// 	}
// }
//
// //Create New Review On Button Click
// function sendReview() {
// 	if (useLocalStorage) {
// 		alert("Using localStorage");
// 		$.fn.localStorageUsed();
// 	} else {
// 		$.fn.addReviewToIndexedDB();
// 	}
// }
//
// $.fn.clearReviewInputs = function() {
//     document.getElementById("send_user_name").value = "";
//  	document.getElementById("send_review").value = "";
// }
//
// $.fn.errorAlert = function() {
//     alert("Вам необхідно заповнити усі поля");
// }
//
// $.fn.addReviewToIndexedDB = function() {
// 	var name = document.getElementById('send_user_name').value;
//     var date = new Date();
// 	var dateString = "";
// 		dateString = date.getDate() + "." + (date.getMonth()+1) + "." + (date.getFullYear())
// 		+ ", " + date.getHours() + ":" + date.getMinutes();
// 	var reviewText = document.getElementById('send_review').value;
//
// 	var transaction = db.transaction(["reviews"], "readwrite");
//
// 	var store = transaction.objectStore("reviews");
//
// 	var review = {
// 		name: name,
// 		dateString: dateString,
// 		reviewText: reviewText
// 	}
//
// 	if(name !== null && name !== '' && reviewText !==null && reviewText !== '') {
// 		var request = store.add(review);
// 	}
//
// 	request.onsuccess = function(e) {
// 		alert("Success");
// 	}
// }
//
// $.fn.showReviewsFromIndexDB = function() {
// 	var transaction = db.transaction(["reviews"], "readonly");
// 	var store = transaction.objectStore("reviews");
// 	var index = store.index('name');
//
// 	index.openCursor().onsuccess = function(e) {
// 		var cursor = e.target.result;
// 		if (cursor) {
// 			var output = '<div class="review divider_bottom" data-divid="'
// 				    	+ idMask+cursor.value.id
// 				    	+  '"><div class="user_name"><h1>'
// 				    	+ cursor.value.name
// 				    	+ '</h1></div>'
// 				    	+ '<div class="review_post_time"><h4>'
// 				    	+ cursor.value.dateString
// 				    	+ '</h4></div>'
// 				    	+ '<div class="review_text"><p>'
// 				    	+ cursor.value.reviewText
// 				    	+ '</p></div>';
// 			cursor.continue();
// 		}
// 		$('#reviews').append(output);
// 	}
// }
