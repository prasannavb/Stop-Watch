var cnt= new Map([["hours",0],["minutes",0],["seconds",0],["day",0],["month",0],["year",0]]);
		var yr=new Map([[1,31],[2,28],[3,31],[4,30],[5,31],[6,30],[7,31],[8,31],[9,30],[10,31],[11,30],[12,31]])
		var myint;
		var min  =padstart(cnt.get("minutes"));
		var sec  =padstart(cnt.get("seconds"));
		var hr   =padstart(cnt.get("hours"));
		var day  =padstart(cnt.get("day"));
		var month=padstart(cnt.get("month"));
		var year =padstart(cnt.get("year"));
		var n=new Date();
		var x=yr.get(n.getMonth()+1);

		function padstart(num){
			return num.toString().padStart(2, '0');
		}

		function settimer()
		{	
			stop();
			myint=setInterval(start,1000);

		}
		function start()
		
		{	
			sec++;
			if(sec>=60)
			{
				min++;
				sec=0;
				if(min>=60)
				{
					hr++;
					min=0;
					if(hr>=24)
					{
						day++;
						hr=0;
						if(x==day)
						{	month++;
							day=0;
							if(month%12==0){
								year++;
								month=0;
							}
						}
					}
				}
			}
			
			document.getElementById("seconds").innerHTML=padstart(sec);
			document.getElementById("minutes").innerHTML=padstart(min);
			document.getElementById("hours").innerHTML=padstart(hr);
			document.getElementById("days").innerHTML=padstart(day);
			document.getElementById("month").innerHTML=padstart(month);
			document.getElementById("year").innerHTML=padstart(year);
		}
		function stop()
		{
			  clearInterval(myint);
		}
		function reset()
		{
			sec = cnt.get("seconds");
			min = cnt.get("minutes");
			hr = cnt.get("hours");
			day = cnt.get("day");
			month = cnt.get("month");
			year = cnt.get("year");

			document.getElementById("seconds").innerHTML=padstart(sec);
			document.getElementById("minutes").innerHTML=padstart(min);
			document.getElementById("hours").innerHTML=padstart(hr);
			document.getElementById("days").innerHTML=padstart(day);
			document.getElementById("month").innerHTML=padstart(month);
			document.getElementById("year").innerHTML=padstart(year);

			stop();
		}
