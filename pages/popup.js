window.addEventListener("load", loadPopup());

var links_inward = document.getElementById("links-inward");

function loadPopup() {
        document.getElementById("loadButton")
                .addEventListener("click", function () { loadPages(); });
}

function loadPages() {
    //console.log("loading pages");

    var complete_text = document.getElementById("links-inward").value;
    var lines = complete_text.split('\n');

    var match_string = "^\s*(http|https):\/\/.*$";

    lines.forEach(function(element) {
        if(RegExp(match_string, "i").test(element)) {
            //console.log("Creating tab for: "+element);
            var creating = browser.tabs.create({
                url: element
            });
            creating.then(onCreated, onError);
        }
      });
}

function onCreated(tab) {
    //console.log(`Created new tab: ${tab.id}`)
  }
  
  function onError(error) {
    //console.log(`Error: ${error}`);
  }
  
