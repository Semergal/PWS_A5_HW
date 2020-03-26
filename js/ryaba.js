const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
    $.getJSON(dataURL, handleData);
}

function handleData(data) {    
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
    //const var1 = $("input[name=var1]")[0].default()
    var var1 = $("input[name=var1]")[0].value;
    var var2 = $("input[name=var2]")[0].value;
    var var3 = $("input[name=var3]")[0].value;
    var var4 = $("input[name=var4]")[0].value;
    var var5 = $("input[name=var5]")[0].value;
    var var6 = $("input[name=var6]")[0].value;
    var speach = "Я снесу вам яичко другое, Не золотое, а простое.";
    var message = "";
    data["text"].forEach(function (item, index) {

        item = item.replace("{var1}", var1);
        item = item.replace("{var2}", var2);
        item = item.replace("{var3}", var3);
        item = item.replace("{var4}", var4);
        item = item.replace("{var5}", var5);
        item = item.replace("{var6}", var6);
        item = item.replace("{speach}", speach);
        message = message + item + "<BR>";

    });

    $("div#result").html(message);

}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
