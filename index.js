for(i=0;i<10;i++)
{
	var tr=document.createElement("tr")
	document.getElementById("tbl").appendChild(tr)
	for(j=0;j<10;j++)
	{
		var td=document.createElement("td")
		tr.appendChild(td)    
		var inp=document.createElement("textarea")
		inp.rows=1
		td.appendChild(inp)
		inp.id="inp"+i+"r"+j
		let r=i,c=j
		inp.oninput=function(e)
		{
			var v=document.getElementById("inp"+r+"r"+c).value.replace("\r\n","\n").replace("\r","\n")              
			for(q=0;q<v.split("\n").length;q++)  
				for(w=0;w<v.split("\n")[q].split("\t").length;w++)
					document.getElementById("inp"+(r+q)+"r"+(c+w)).value=v.split("\n")[q].split("\t")[w]
		}
		
	}
}