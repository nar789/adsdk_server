;(function(){
	module.exports=function(_g){

		var app = _g.app;
		var http = _g.http;

		function route(){
			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			app.post('/init', (req, res) => {
				const key = req.body.key;
				console.log(`key = ${key}`);
				const token = "a123b123c123";
				if(key != null)  {
					res.send(token);
				}

			});

			app.post('/create', (req, res) => {
				const token = req.body.token;
				const type = req.body.type;
				const userInfo = req.body.userInfo;
				console.log(`create ${JSON.stringify(req.body)}`); 
				let list = [];
				list.push({
					adId:"1",
					imgUrl:"http://14.47.39.138:3311/assets/adsample.png",
					href:"https://www.daum.net/",
					traceUrl:"http://14.47.39.138:3311/trace"
				});
				list.push({
					adId:"2",
					imgUrl:"http://14.47.39.138:3311/assets/adsample2.png",
					href:"https://www.google.com/",
					traceUrl:"http://14.47.39.138:3311/trace"
				});
				res.json(list);
			});

			app.post('/on', (req, res) => {
				const token = req.body.token;
				const adId = req.body.adId;
				const datetime = req.body.datetime;
				const userInfo = req.body.userInfo;
				console.log(`/on info = ${JSON.stringify(req.body)}`); 
				res.send("success");
			});

			//1. enetry point
			app.listen(3311,function(){
			  console.log('TOPPING AD SDK TEST Server listen on *:3311');
			});
		}


		return {
			route:route
		}
	}

})();



