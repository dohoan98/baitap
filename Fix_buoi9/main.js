function checkName(){
	var name = document.getElementById('txthoten').value;
	var error_name = document.getElementById('checkName');
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

    if(!regexName.test(name)){
    	error_name.innerHTML = "(*)Họ tên không đúng định dạng!";
    }else{
    	error_name.innerHTML = "(*)";
    	return name;
    }
}
function checkEmail(){
	var email = document.getElementById('txtemail').value;
	var error_email = document.getElementById('checkEmail');
	var regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
	
	 if(!regexEmail.test(email)){
		error_email.innerHTML = "Email không đúng định dạng!";
	}else{
		error_email.innerHTML = "(*)";
		return email;
	}
}

function checkPhone()
{
	var phone = document.getElementById('txtsdt').value;
	var error_phone = document.getElementById('checkSdt');
	var regexPhone = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
	if (!regexPhone.test(phone))
		{
			error_phone.innerHTML = "Số điện thoại không đúng định dạng !";
		}
	else
		{

		error_phone.innerHTML = "(*)";
		return phone
		}
}
function checkPass() {
var passWord = document.getElementById('txtpass').value;
var error_pass = document.getElementById('checkPass');
var regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
if(passWord.length<6)
{
	error_pass.innerHTML="Bạn phải nhập ít nhất 6 ký tự";
}
else if (!regexPass.test(passWord)) {
error_pass.innerHTML = "Bạn phải nhập cả số cả chữ";
}else{
error_pass.innerHTML = "(*)";
}
}
function checkRepassword(){
var passWord = document.getElementById('txtpass').value;
var repass = document.getElementById('txtrepass').value;
var error_repass = document.getElementById('checkRepass');
if (passWord != repass) {
error_repass.innerHTML = "Mật khẩu không khớp !";
}else{
error_repass.innerHTML = "(*)";
}
}
function validate()
{
	if (checkName() && checkEmail() && checkPhone() && checkPass() && checkRepassword()) 
		{
			add();
			edit(index);
		}
	else 
	{

	}

}
//them sinh viên


var datalist=[];
function add(){
	//bat loi de trong ho ten
	var name = document.getElementById('txthoten').value;
	var error_name = document.getElementById('checkName');
	//
	var phone = document.getElementById('txtsdt').value;
	var error_phone = document.getElementById('checkSdt');
	//
	var email = document.getElementById('txtemail').value;
	var error_email = document.getElementById('checkName');
	//
	var passWord = document.getElementById('txtpass').value;
	var error_pass = document.getElementById('checkPass');
	//
	var repass = document.getElementById('txtrepass').value;
	var error_repass = document.getElementById('chechRepass');
	if (name=="" || email==""||phone==""||passWord==""||repass=="") 
	{
		error_name.innerHTML="Bạn chưa nhập đủ thông tin !"
	}
	else
	{
	
	var ten=document.getElementById('txthoten').value;
	var sdt=document.getElementById('txtsdt').value;
	var email=document.getElementById('txtemail').value;
	var pass=document.getElementById('txtpass').value;
	var repass=document.getElementById('txtrepass').value;
	var std = 
		{
			
			"txthoten" 	: ten,
			"txtsdt" 	: sdt,
			"txtemail" 	: email,
			"txtpass" 	: pass,
			"txtrepass"	: repass
		};

	/*
	var stt = datalist.length - 1;
	var phone = datalist[stt].txtsdt;*/
	if(currIndex == (-1))
	{
		addtag(std);
	}
	
	else
	{
		datalist[currIndex]=std;
		currIndex=-1;
		document.getElementById('btnclick').innerHTML="Đăng ký ";
		displayAll();
	}
}
}

function addtag(std)
{
datalist.push(std);

	var ds = document.getElementById('tt');
	/*
	var stt = datalist.length - 1;
	var phone = datalist[stt].txtsdt;*/
	ds.innerHTML += 
		"<tr>"+
		"<td>"+datalist.length+"</td>"+
		"<td>"+std.txthoten+"</td>"+
		"<td>"+std.txtsdt+"</td>"+
		"<td>"+std.txtemail+"</td>"+
		"<td>"+std.txtpass+"</td>"+
		"<td>"+std.txtrepass+"</td>"+
		"<td><input type='button' name='' value='Chọn' onclick='edit("+(datalist.length-1)+")'></td>"+
		"<td><input type='button' name='' value='Xóa' onclick='deleteID("+(datalist.length-1)+")'></td>"+
		"</tr>";
}

function display()
{
	var ds = document.getElementById('tt');
	ds.innerHTML='';
}
function displayAll()
{
	var ds = document.getElementById('tt');
	ds.innerHTML='';
	for (var i = 0; i < datalist.length; i++) {
		var std=datalist[i];
		
		ds.innerHTML += 
		"<tr>"+
		"<td>"+(i+1)+"</td>"+
		"<td>"+std.txthoten+"</td>"+
		"<td>"+std.txtsdt+"</td>"+
		"<td>"+std.txtemail+"</td>"+
		"<td>"+std.txtpass+"</td>"+
		"<td>"+std.txtrepass+"</td>"+
		"<td><input type='button' name='' value='Chọn' onclick='edit("+i+")'></td>"+
		"<td><input type='button' name='' value='Xóa' onclick='deleteID("+i+")'></td>"+
		"</tr>";
	}

}
var currIndex=-1;
function edit(index){
currIndex=index;
	/*for (var i = 0; i < datalist.length; i++) {
		if (datalist[i].txtsdt == phone) {
			document.getElementById('txthoten').value = datalist[i].txthoten;
			document.getElementById('txtsdt').value = datalist[i].txtsdt;
			document.getElementById('txtemail').value = datalist[i].txtemail;
			document.getElementById('txtpass').value = datalist[i].txtpass;
			document.getElementById('txtrepass').value = datalist[i].txtrepass;
		} 
	}*/
			var std=datalist[index];
			document.getElementById('txthoten').value = std.txthoten;
			document.getElementById('txtsdt').value= std.txtsdt;
			document.getElementById('txtemail').value = std.txtemail;
			document.getElementById('txtpass').value = std.txtpass;
			document.getElementById('txtrepass').value = std.txtrepass;
			document.getElementById('btnclick').innerHTML="Cập nhật";
}
