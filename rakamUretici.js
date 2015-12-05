/* BBY261 Sayısal Loto Uygulaması */

function sayisalLoto(){
	var rakamlar = new Array(49); //Çekiliş yapılacak sayıların dizisi
	var loto = new Array(6); //Oynanacak kolonun dizisi
	
	document.write('<center><img src="sayisalLotoLogo.jpg"></center>');
	for(var i=0; i<49; i++){ //Rakam havuzunun oluşturulması
		rakamlar[i]=i+1;
	}
	
	document.write('<table cellpadding="5" cellspacing="10" border="0" align="center">');
	for(var i4=0; i4<6; i4++){ //6 kolonun ekrana yazdırılması
		document.write('<tr>');
		for(var i2=0; i2<6; i2++){ //Kolonun oluşturulması
			var havuz = rakamlar.length;
			var secilen = Math.floor(Math.random() * havuz);
			loto[i2]=rakamlar[secilen];
			rakamlar.splice(secilen,1);
		}
		loto.sort(function(a, b){return a-b});
		for(var i3=0; i3<6; i3++){ //Tek kolonun yazdırılması
			document.write('<td align="right" background="top.png" height="10px" width=10px >'+loto[i3]+'</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>');	
}
sayisalLoto();