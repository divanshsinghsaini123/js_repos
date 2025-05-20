function addlanguage(language) {
  const languageList = document.getElementById("language-list");
  const li = document.createElement("li");
  li.innerHTML = language;
  languageList.appendChild(li);
}

function addOptimization(language){
    const optimizationList = document.getElementById("optimization-list");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(language));
    optimizationList.appendChild(li);
}
//this is more optimized 


//how you can change the style using js 
document.getElementById("myElement").style.fontSize = "24px";


//or  you can do 
document.getElementById("myElement").classList.add("highlight");

//add this to your css file 
.highlight {
  color: white;
  background-color: navy;
  padding: 10px;
}
