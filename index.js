document.addEventListener('keyup', event => {

    var x = event.key;

    if(x === "f")
    {
        var i = 0;
        var pg = '';
       
        var msg = [];

        for(i;i<6;i++)
        {
            msg[i]=document.getElementsByTagName("p")[i].textContent;
        }

        pg = msg[0] + msg[1] + msg[2] + msg[3] + msg[4] + msg[5];

        //pg = "A leading business organisation says more than 40% of its members are considering leaving Hong Kong due to the city's strict coronavirus rules.The American Chamber of Commerce in Hong Kong pointed to border closures as a major issue for those surveyed.The organisation's president has told the BBC she has now left Hong Kong.The Asian financial hub has some of the world's tightest coronavirus rules as it follows mainland China's tough zero-Covid policies.The American Chamber of Commerce in Hong Kong's (AmCham HK) 2022 Business Sentiment Survey polled 262 individuals and corporate representatives, many of which have moved to the city from overseas.It found that 44% of individuals said that they may leave Hong Kong due to its border controls and social restrictions. That compares to 26% of the companies surveyed saying they are considering relocating.";

        console.log(pg)

        getdata(pg);

    }
    if(x == "e")
    {
        var element = document.getElementById("boxx");
        element.remove()
    }

}, false);

function getdata(para)
{
    fetch(`https://fake-news-detection1.p.rapidapi.com/?text=${para}`, {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-host": "fake-news-detection1.p.rapidapi.com",
		"x-rapidapi-key": "e298a5d8d4msheccc07b538e2619p1adae2jsn070d3a5e9d30"
	},
	"body": {
		"key1": "value",
		"key2": "value"
	}
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    const val = data.prediction
    if(val.localeCompare("REAL") == 0)
    {
        document.body.innerHTML += 
        `<script>
        function fun()
        {
            console.log("clicked")
        }
        </script>
        <div id="boxx" style="position:fixed;bottom:10px;right:10px;border:3px solid #fe890c;width:20%;z-index:100;background:#ffa25c;color:white;border-radius: 7px;padding: 5px;">
            <br>
            <h4 style="display: inline-block;">
                <span style="background-color:red;color:#ffedeb;border-radius: 5px;padding:10px;font-family: Arial, Helvetica, sans-serif;">Misinformation alert</span>
                <button style="background-color: transparent;border: none; display: contents;" onclick="fun()">
                    <svg style="width: 7%;float: right;padding: 0px 10px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26" id="Слой_1" version="1.1" viewBox="0 0 26 26" xml:space="preserve"><path d="M14.0605469,13L24.7802734,2.2802734c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469  s-0.7675781-0.2929688-1.0605469,0L13,11.9394531L2.2802734,1.2197266c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0  s-0.2929688,0.7675781,0,1.0605469L11.9394531,13L1.2197266,23.7197266c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469  C1.3662109,24.9267578,1.5576172,25,1.75,25s0.3837891-0.0732422,0.5302734-0.2197266L13,14.0605469l10.7197266,10.7197266  C23.8662109,24.9267578,24.0576172,25,24.25,25s0.3837891-0.0732422,0.5302734-0.2197266  c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469L14.0605469,13z" fill="#1D1D1B"/></svg>
                </button>
            </h4>
            <br>
            <br>
            <br>
            <h3 style="font-weight: bold;font-size: 20px;font-family: Arial, Helvetica, sans-serif;color:#2e1c15;display: inline-block;padding: 2px;">News authenticity: </h3> 
            <span style="color: #83e523;display: inline-block;font-size: 20px;font-family: Arial, Helvetica, sans-serif;padding: 2px;">TRUE</span> 
            <br>
            <br>
            <p style="color:#2e1c15;font-family: Arial, Helvetica, sans-serif;font-size: 20px;margin: 0;">
                Our algorithm label this news coming from a real source.
            </p>
            <br>
            <br>
            <h5 style="color:#2e1c15;font-family: Arial, Helvetica, sans-serif;font-style: italic;">Newser</h5>
            <br>
        </div>`;
    }
    else
    {
        document.body.innerHTML += 
        `<script>
        function fun()
        {
            console.log("clicked")
        }
        </script>
        <div id="boxx" style="position:fixed;bottom:10px;right:10px;border:3px solid #fe890c;width:20%;z-index:100;background:#ffa25c;color:white;border-radius: 7px;padding: 5px;">
            <br>
            <h4 style="display: inline-block;">
                <span style="background-color:red;color:#ffedeb;border-radius: 5px;padding:10px;font-family: Arial, Helvetica, sans-serif;">Misinformation alert</span>
                <button style="background-color: transparent;border: none; display: contents;" onclick="fun()">
                    <svg style="width: 7%;float: right;padding: 0px 10px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26" id="Слой_1" version="1.1" viewBox="0 0 26 26" xml:space="preserve"><path d="M14.0605469,13L24.7802734,2.2802734c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469  s-0.7675781-0.2929688-1.0605469,0L13,11.9394531L2.2802734,1.2197266c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0  s-0.2929688,0.7675781,0,1.0605469L11.9394531,13L1.2197266,23.7197266c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469  C1.3662109,24.9267578,1.5576172,25,1.75,25s0.3837891-0.0732422,0.5302734-0.2197266L13,14.0605469l10.7197266,10.7197266  C23.8662109,24.9267578,24.0576172,25,24.25,25s0.3837891-0.0732422,0.5302734-0.2197266  c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469L14.0605469,13z" fill="#1D1D1B"/></svg>
                </button>
            </h4>
            <br>
            <br>
            <br>
            <h3 style="font-weight: bold;font-size: 20px;font-family: Arial, Helvetica, sans-serif;color:#2e1c15;display: inline-block;padding: 2px;">News authenticity: </h3> 
            <span style="color: red;display: inline-block;font-size: 20px;font-family: Arial, Helvetica, sans-serif;padding: 2px;">FALSE</span> 
            <br>
            <br>
            <p style="color:#2e1c15;font-family: Arial, Helvetica, sans-serif;font-size: 20px;margin: 0;">
                Our algorithm label this news coming from a untrusted source.
            </p>
            <br>
            <br>
            <h5 style="color:#2e1c15;font-family: Arial, Helvetica, sans-serif;font-style: italic;">Newser</h5>
            <br>
        </div>`;
    }
    
    })
    .catch(err => {
        console.error(err);
    });
}




// function funl() {
//     document.body.innerHTML -= 
//         `<div id="boxx" style="position:fixed;bottom:10px;right:10px;border:3px solid #fe890c;width:20%;z-index:100;background:#ffa25c;color:white;border-radius: 7px;padding: 5px;">
//             <br>
//             <h4 style="display: inline-block;">
//                 <span style="background-color:red;color:#ffedeb;border-radius: 5px;padding:10px;font-family: Arial, Helvetica, sans-serif;">Misinformation alert</span>
//                 <svg style="width: 7%;float: right;padding: 0px 10px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26" id="Слой_1" version="1.1" viewBox="0 0 26 26" xml:space="preserve"><path d="M14.0605469,13L24.7802734,2.2802734c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469  s-0.7675781-0.2929688-1.0605469,0L13,11.9394531L2.2802734,1.2197266c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0  s-0.2929688,0.7675781,0,1.0605469L11.9394531,13L1.2197266,23.7197266c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469  C1.3662109,24.9267578,1.5576172,25,1.75,25s0.3837891-0.0732422,0.5302734-0.2197266L13,14.0605469l10.7197266,10.7197266  C23.8662109,24.9267578,24.0576172,25,24.25,25s0.3837891-0.0732422,0.5302734-0.2197266  c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469L14.0605469,13z" fill="#1D1D1B"/></svg>
//             </h4>
//             <br>
//             <br>
//             <br>
//             <h3 style="font-weight: bold;font-size: 20px;font-family: Arial, Helvetica, sans-serif;color:#2e1c15;display: inline-block;padding: 2px;">News authenticity: </h3> 
//             <span style="color: #83e523;display: inline-block;font-size: 20px;font-family: Arial, Helvetica, sans-serif;padding: 2px;">TRUE</span> 
//             <br>
//             <br>
//             <p style="color:#2e1c15;font-family: Arial, Helvetica, sans-serif;font-size: 20px;margin: 0;">
//                 Our algorithm label this news coming from a real source.
//             </p>
//             <br>
//             <br>
//             <h5 style="color:#2e1c15;font-family: Arial, Helvetica, sans-serif;font-style: italic;">Newser</h5>
//             <br>
//         </div>`;
//     console.log("button clicked")
// }

