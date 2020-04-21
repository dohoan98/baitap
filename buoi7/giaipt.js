function getdl()
		{
			var a= document.getElementById("txta").value;
			var b= document.getElementById("txtb").value;
			var c= document.getElementById("txtc").value;
			var delta=b*b-(4*a*c);
			var x1= parseFloat((-b+Math.sqrt(delta))/(2*a));
			var x2= (-b-Math.sqrt(delta))/(2*a);
			var xx= (-b/(2*a));
			var x=(-c)/b;
			if(a==0)
			{
				document.getElementById("txtkq").value="PT Bậc 1 có nghiệm : "+x;
			}
			else
			{
				
				if(delta>0)
				{
					document.getElementById("txtkq").value="PT có 2 nghiệm x1= "+x1.toFixed(2)+"; x2="+x2.toFixed(2);
				}
				else if(delta==0)
				{
					document.getElementById("txtkq").value="PT có nghiệm kép x1=x2= "+xx.toFixed(2);
				}
				else
				{
					document.getElementById("txtkq").value="PT vô nghiệm";
				}
			}


		}