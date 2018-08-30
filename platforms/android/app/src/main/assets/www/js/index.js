var symbol;
var count = 0;
var time;

function AddCompanyToSearch(companyName, primaryExchange, symbol) {
	var ul = document.getElementById("result_search");
	var li = document.createElement('li');

var cell = '<li class="panel-head search-res">'+
'            <div class="wrapper">'+
'                <div class="panel-head-inner">'+
'                    <h2 class="abbr-title" id="symbol">'+symbol+'</h2>'+
'                    <div class="flex-column full-info">'+
'                        <h3 class="title-label" id="company">'+companyName+'</h3>'+
'                        <div class="bottom-word-line"><span class="title-index" id="exchange">'+primaryExchange+'</span></div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </li>';



	li.innerHTML = cell;

	ul.appendChild(li);
}

function ClearList()
{
	document.getElementById("result_search").innerHTML="";
}

$(document).on('click', "div.wrapper", function(e) {
    document.getElementById("main_wrapper").className="main-wrapper blur";
    document.getElementById("modalContent2").style.visibility = "visible";
	document.getElementById("symbol").innerHTML = e.currentTarget.querySelector("#symbol").innerHTML;
	document.getElementById("company").innerHTML = e.currentTarget.querySelector("#company").innerHTML;
	document.getElementById("exchange").innerHTML = e.currentTarget.querySelector("#exchange").innerHTML;
	symbol = e.currentTarget.querySelector("#symbol").innerHTML;
	document.getElementById("count").value = localStorage.getItem('comission');
	document.getElementById("time").value = localStorage.getItem('time');
});

$(document).on('change', "#count", function(e) {
	if(document.getElementById("count").value < 0) document.getElementById("count").value = 0;
	if(document.getElementById("count").value > 99) document.getElementById("count").value = 99;
});

$(document).on('click', "#back_button", function(e) {
    document.getElementById("modalContent2").style.visibility = "hidden";
	document.getElementById("back_button").className="modalButton back";
	document.getElementById("send_button").className="modalButton back";
});

$(document).on('click', "#send_button", function(e) {
    document.getElementById("modalContent2").style.visibility = "hidden";
	document.getElementById("back_button").className="modalButton back";
	document.getElementById("send_button").className="modalButton back";
	count = document.getElementById("count").value;
	var timeStr = document.getElementById("time").value;
	time = new Date();
	time.setMinutes(timeStr.substr(3,2));
	time.setHours(timeStr.substr(0,2));
	time.setSeconds(0);
	localStorage.setItem('comission', count);
	localStorage.setItem('time', timeStr);
	document.getElementById("modalContent3").style.visibility = "visible";
	document.getElementById("main_wrapper").className="main-wrapper blur";
});

$(document).on('click', "#send_button2", function(e) {
    document.getElementById("modalContent3").style.visibility = "hidden";
	document.getElementById("back_button2").className="modalButton back";
	document.getElementById("send_button2").className="modalButton back";
	console.log(count);
	console.log(time);
	$.ajax({
	url: 'http://server.xlinvest.net/add_forward_service.php',
	method: 'POST', // or GET
	data: ({
		Symbol:symbol,
		Comission:count,
		Time:time.toISOString().slice(0, 19).replace('T', ' '),
		}),
		success: function(msg) {
		$.ajax({
		url: 'http://server.xlinvest.net/push_notify.php',
		method: 'POST', // or GET
		data: ({
		time:time.getHours()+':'+time.getMinutes(),
		discont:count,
		company:document.getElementById("company").innerHTML,
		symbol:document.getElementById("symbol").innerHTML,
		}),
			success: function(msg2) {
			console.log('good send');
			}
			});
		}
	});
});

$(document).on('click', "#back_button2", function(e) {
    document.getElementById("modalContent3").style.visibility = "hidden";
	document.getElementById("back_button2").className="modalButton back";
	document.getElementById("send_button2").className="modalButton back";

});

$('#search_input').on('keyup change', function(){
      ClearList();
	if(document.getElementById('search_input').value != "")
	{
		$.ajax({
		data: 'IMEI='+localStorage.getItem('UUID')+'',
		url: 'http://server.xlinvest.net/get_all_companies.php',
		method: 'POST', // or GET
		success: function(msg) {
				var list = JSON.parse(msg);
				for(var i in list)
				{
					list[i]['Points'] = 0;

					var input = document.getElementById('search_input').value.toLowerCase();
					var symbol = list[i]['Symbol'].toLowerCase();
					var companyName = list[i]['CompanyName'].toLowerCase();

					if (symbol ==  input) list[i]['Points'] += 10;
					if (companyName == input) list[i]['Points'] += 9;
					if (symbol.startsWith(input)) list[i]['Points'] += 8;
					if (companyName.startsWith(input)) list[i]['Points'] += 7;
					if (symbol.includes(input)) list[i]['Points'] += 6;
					if (companyName.includes(input)) list[i]['Points'] += 5;
				}
				list.sort(function(x, y){return y.Points - x.Points});

				if (list[0]['Points'] == 0)
				{
					document.getElementById("result_search").innerHTML='<div class="no"><span class="no-text">Ничего не найдено</span></div>';
				}
				else
				{
					for (var i = 0; i < 10; i++) {
						AddCompanyToSearch(list[i]['CompanyName'],list[i]['PrimaryExchange'],list[i]['Symbol'])
					}
				}
			}
		});
	}
	else document.getElementById("result_search").innerHTML='<div class="no"><span class="no-text">Ничего не найдено</span></div>';
});
