
		$(function(){
			var socket = io.connect();

			

			var video = document.getElementById("video");
			var canvas = document.createElement('canvas');
 				canvas.width = 800;
 				canvas.height = 600;
 				
 				var context=canvas.getContext('2d');
 				context.width = canvas.width;
			    context.height = canvas.height;

			

			function loadCam(stream){
				video.src = window.URL.createObjectURL(stream);

				

			}
			function loadFail(){
				alert('an error occurred with the camera');
				

			}

			function viewVideo(video, context){
				context.drawImage(video, 0, 0, context.width, context.height);
				
				
				socket.emit('stream', canvas.toDataURL("image/webp"));
				

			

			}

			navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia);

			if(navigator.getUserMedia){
				navigator.getUserMedia({video : true},loadCam, loadFail);

			}

			setInterval(function(){
				viewVideo(video,context);

			},70);

			

		});