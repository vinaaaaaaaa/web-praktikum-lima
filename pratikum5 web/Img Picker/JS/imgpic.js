// JavaScript Document
function pilih(){
 var pil=document.getElementById("form1").pic.value;
  if (pil=="1")
    {
        document.getElementById("img").innerHTML="<img src='IMG/anjing.jpg'>";
		window.alert("Ini Adalah Gambar Dari anjing.jpg");
    }
	else if (pil=="2")
    {
        document.getElementById("img").innerHTML="<img src='IMG/kucing.jpg'>";
		window.alert("Ini Adalah Gambar Dari kucing.jpg");
    }
	else if (pil=="3")
    {
        document.getElementById("img").innerHTML="<img src='IMG/monyet.jpg'>";
		window.alert("Ini Adalah Gambar Dari monyet.jpg");
    }
	else if (pil=="4")
    {
        document.getElementById("img").innerHTML="<img src='IMG/lumba.jpg'>";
		window.alert("Ini Adalah Gambar Dari lumba.jpg");
    }
	else if (pil=="5")
    {
        document.getElementById("img").innerHTML="<img src='IMG/burung.jpg'>";
		window.alert("Ini Adalah Gambar Dari burung.jpg");
    }
	else if (pil=="6")
    {
        document.getElementById("img").innerHTML="<img src='IMG/marmut.jpg'>";
		window.alert("Ini Adalah Gambar Dari marmut.jpg");
    }
	else if (pil=="7")
    {
        document.getElementById("img").innerHTML="<img src='IMG/hamsters.jpg'>";
		window.alert("Ini Adalah Gambar Dari hamsters.jpg");
    }
	else if (pil=="8")
    {
        document.getElementById("img").innerHTML="<img src='IMG/kelinci.jpg'>";
		window.alert("Ini Adalah Gambar Dari kelinci.jpg");
    }else{
		document.getElementById("img").innerHTML="<img src='IMG/Pilih.jpg'>";
	}
	
}
