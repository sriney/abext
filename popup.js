// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
	var link = document.getElementById('currentPage');
	var ul = document.getElementById('savedLinks');
	chrome.tabs.query({
    		active: true,               // Select active tabs
    		lastFocusedWindow: true     // In the current window
		}, function(array_of_Tabs) {
    		var tab = array_of_Tabs[0];
		//link.innerHtml = tab.url;
                link.setAttribute('href', tab.url);
	        chrome.storage.local.get({storedLinks: []}, function(result) {
		 var storedLinks = result.storedLinks;
		 storedLinks.push({url: tab.url, HasBeenUploadedYet: false});
		 chrome.storage.local.set({storedLinks: storedLinks},
			 function() {
				chrome.storage.local.get('storedLinks',
						function(result) {
				console.log(result.storedLinks);
		for(var index in result.storedLinks) {					var newLI = document.createElement("li");			
		ul.appendChild(newLI);
		var savedLink = result.storedLinks[index].url;
		newLI.innerHTML = "<a href='"+savedLink+"'>"+savedLink+"</a></li>";
		}
		 		});
			});
			
		});
		});
      	//document.body.appendChild(link);
});
