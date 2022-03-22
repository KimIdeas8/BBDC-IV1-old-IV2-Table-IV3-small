 
//--------------------------------------------------------------------------------------------------
//Name			: Common validation (common.js)
//Description	: Code cointaining generic client side validations.
//Parms			: Depending on functions
//Side Effects	: None.
//Notes			: None.
//History		:
//	30112001	1.0		msching	Reuse from CRM.
//	05122001	1.1		msching	Add toggleColor() and verifyCheckBox().
//	06122001	1.2		msching Add checkBoxes().
//	10122001	1.3		msching Add handleEnter(), placeFocus(), disable context menu
//	13122001	1.4		msching Add checkSpan(), formatDate(), checkDate()
//	19122001	1.5		msching Add isEmailAddress()
//	10012002	1.6		msching Add showFullScreen(), quit(), back(), logout()
//	04032002	1.7		ywng	Add collapseBlurbs(), expandBlurbs() 
//	16042002	1.8		msching Add validateForm(), hideAllOption(), displaOption()
//	22042002	1.9		msching Add formHandler(), textCounter()
//	09052002	2.0		spng	modify formatTime(), checkTime()
//	20052002	2.1		ylsam	Add timeChecker()
//	21052002	2.2		msching	Add dayChecker()
//	22052002	2.3		msching Add isPercentage()
//	24052002	2.4		msching Modify isAlphaNumeric() to accept space
//	28052002	2.5		msching Add isAlphaNumericNoSpace(), isSameString()
//						msching Add validateRadio()
//	30052002	2.6		msching Add fToggleRowColor()
//	13072002	2.7		msching Add postBooking(), validateInput() to be used in booking page
//	16072002	2.8		ylsam	Add popup(popupURL)
//	20072002	2.9		msching	Add formatDate1(), checkDate1() for the use of enrolment to cater blank date
//  22072002    3.0     cklee   Add CheckLength(Object,Length), for the use of checking the max length of the field
//  30072002    3.1     msching Add bookingLimit(), for the use to set the day range in the span
//  08082002    3.2     msching 	Modify isEmailAddress() to accept null value
//  08082002    3.3     msching 	Modify checkdate() & checkdate1() to cater for no numeric value entered
//  22092002    3.4     cklee   	Add formatMonthYear() , checkMonthYear to cater for MM/YY only
//  25092002    3.5     msching 	Add blueBtnOut(), blueBtnOver(),whiteBtnOut(),whiteBtnOver() to change the
//									button colour onmouseover & onmouseout
//  07102002    3.6     msching 	modify validateInput() for checkbox validation
//  09102002    3.7     vlchin  	Added confirmCancelBooking() function
//  12112002    3.8     msching 	modify verifyCheckBox() function to cater for no form found
//  13112002    3.9     msching 	Added confirmTestCancelBooking() function
//  02032003    4.0     msching 	Added pageUp() function
//  11032003    4.1     msching 	Modify CheckLength() and validate input for checking length  function
//  03042003    4.2     msching 	Add checkBoxes2() to increase performance
//  22052003    4.3     msching 	Add showBooking() to show modal dialog for booking statement
//  09072003    4.4     msching 	Add isExpiryDateValid() to check credit card expiry date
//  29012004	4.5		chooneng	Add confirmSubmit() to display a dialog box asking for 
//									confirmation on Deletion
//  04022004    4.6     ckb			(for performance tuning on CircuitRental Booking)
//									Added function postBookingPDI, 	
//									Added function SetCountAndToggleColor
//									Modified verifyCheckBox() to check for 'varSlotCOunt'
//  10022004	4.7		chooneng	Add confirmSubmitPT() to display a dialog box asking for
//									confirmation on Deletion
//  10022004	4.8		chooneng	Add confirmSubmitPDI() to display a dialog box asking for
//									confirmation on Deletion
//	12022004	4.9		chooneng	Add postTheoryBooking() and checkBooking() to check whether
//									selected theory lesson already attended before posting
//  190022004	5.0		chooneng	Add confirmSubmitTL() and confirmSubmitTT()
//									To display a dialog box asking for confirmation on Deletion
//  12032004    5.1     lwei 		Added trim(inputString) to trim an input string in Javascript.
//  18052004	5.2		ylsam		Add confirmSubmitAT()
//  01072004    5.3     ckb         Add formatCurrency2() (from Manfred)
//  20092004    5.4     lwei        Add replaceSubstring(inputString, fromString, toString) 
//  27092004    5.5     lwei        Add ValidateFromToDate(date1,date2) 
//  19012007    5.6	    kl          Add popup script from 3rd party
//  15052009    5.7     luwen       Modify confirmCancelBooking() function
//  15052009    5.8     luwen       Add confirmCancelBookingTrySell() function
//-----------------------------------------------------------------------------------------------------------


function showBooking(url)
{		        
		var sFeatures="dialogHeight: 500px;dialogWidth: 800px;status:0;resizable:1;help:0";
		var r = showModalDialog(url, '', sFeatures);						
}			


//---------------------------------------------------------------------------------------------------
//Description	: Disable context menu
//Parms			: None
//Returns		: None
//Notes			: Use in whole BBDC modules to disable right click
//---------------------------------------------------------------------------------------------------
document.oncontextmenu = 
function () {
return true;
};



//---------------------------------------------------------------------------------------------------
//Description	: Prevent back button
//Parms			: None
//Returns		: None
//Notes			: Use in whole BBDC modules to disable right click
//---------------------------------------------------------------------------------------------------
function mykeyhandler() {
   if (window.event && window.event.keyCode == 8) { // try to cancel the backspace
      window.event.cancelBubble = true;
      window.event.returnValue = false;
      return false;
   }
}
//document.onkeydown = mykeyhandler;




/********************************************************************************************************
Description	: Use to scroll the page up
Parms		: None
Returns	    : None
Notes		: Use in long pages
*********************************************************************************************************/
function pageUp () {
  window.scrollTo(0, 0);
}


/********************************************************************************************************
Description	: Use to change the colour onmouseover and onmouseout
Parms		: button object
Returns	    : change the button colour
Notes		: Use in All pages with button
*********************************************************************************************************/
//Customize Blue Button Mouse Out Color
function blueBtnOut(obj) {
	obj.style.background="#0066CC";
}

//Customize Blue Button Mouse Over Color
function blueBtnOver(obj) {
	obj.style.background="#00CCFF";
}

//Customize White Button Mouse Out Color
function whiteBtnOut(obj) {
	obj.style.background="#FFFFFF";
	obj.style.color="#0066CC";
}

//Customize White Button Mouse Over Color
function whiteBtnOver(obj) {
	obj.style.background="#00CCFF";
	obj.style.color="#FFFFFF";
}

//Customize red Button Mouse Out Color
function redBtnOut(obj) {
	obj.style.background="#FFFFFF";
	obj.style.color="#0066CC";
}

//Customize red Button Mouse Over Color
function redBtnOver(obj) {
	obj.style.background="#00CCFF";
	obj.style.color="#FFFFFF";
}

//******************************************************************************************************/


/*******************************************************************************************************
Description	: Use to set the day range in the span
Parms		: textbox value, spanid
Returns	    : display the result in the span
Notes		: Use in Maintenance page
*******************************************************************************************************/
function bookingLimit(obj, id)
{
		var newRange;
		var spanid;
		newRange = obj.value;		
		spanid = document.getElementById(id);
				
		if (isNaN(obj.value))
			spanid.innerHTML = '-';		
		else		
			spanid.innerHTML = newRange;
    
}
    

/*****************************************************************************************************
Description	: Post the form once the validation is done depend on which button that is pressed.
Parms		: Boolean (validateRadio(form))
Returns	    : FUNCTION - Boolean; Validation Yes(T)/No(F)
Notes		: Use in Booking page
Amendment		: CKB (20040204 - replaces the loop by checking from bottom - up (slot)
******************************************************************************************************/

function validateInput(form, radioMsg, checkMsg) {
  	
  for (var e = 0; e < form.elements.length; e++) {
    var el = form.elements[e];    
    if (el.type == 'radio') {
      var group = form[el.name];
      var checked = false;
      if (!group.length)
        checked = el.checked;
      else
        for (var r = 0; r < group.length; r++)
          if ((checked = group[r].checked))
            break;
      if (!checked) {
        alert(radioMsg);
        el.focus();
        return false;
      }
    }//if loop
    else if (el.type == 'checkbox') {
      var group = form[el.name];

      if (group.length==null) {     
         if (group.name!='allMonth' && group.name!='allSes' && group.name!='allDay' && !group.checked) {
           alert(checkMsg);
           el.focus();
           return false;
         }
      }
      
      if (group.length>0) {
        var checked = false;

        for (var r = 0; r < group.length; r++) {
          if ((checked = group[r].checked)) {
            checked=true;
			break;
		  }
	    }

        if (!checked) {
          alert(checkMsg);
          
          el.focus();
          return false;
        }
      }
    }
  }//for loop
  return true;    
}

function postBooking(form, url, radioMsg, checkMsg){				
		
	var blnResult = false;			
	blnResult = validateInput(form, radioMsg, checkMsg);	
	
	if (blnResult)
	{					
		form.action = url;
		form.submit();		
	}
}

/*****************************************************************************************************
Description	: To check whether selected theory lesson already attended before posting.
Parms		: radio button object, text object
Returns	    : Boolean True/False;
Notes		: Use in all Theory Lesson Booking (BTL, FTL, RTL, HTL, TL, PPL)
			  Check for lesson attended in other account and current account
Added		: 12022004 chooneng: postTheoryBooking(), checkBooking()
******************************************************************************************************/

function postTheoryBooking(form, url, radioMsg, checkMsg, rdoObj, txtObj)
{				
	var blnResult = false;			
	blnResult = validateInput(form, radioMsg, checkMsg);	

	if (blnResult)
	{					
		if (checkBooking(rdoObj, txtObj))
		{
			form.action = url;
			form.submit();		
		}
	}
}

function checkBooking(rdoObj, txtObj)
{
	var msg;
	var strTxt;
	
	msg = "You have attended this lesson before.\n";
	msg = msg + "Do you wish to proceed?";
	
	var i;

	if (rdoObj.length > 0)
	{
		for(i=0;i<rdoObj.length;i++)
		{
			if (rdoObj[i].checked)
			{
				strTxt = txtObj[i].value.toLowerCase();
				if (strTxt.indexOf("a") > 0)								// a  - attended
				{
					if (strTxt.charAt(strTxt.indexOf("a")+1) != "b")		// ab - absent
					{
						if (!confirm(msg))
							return false;
					}
				}
			}
		}
	}
	else					// only one subject
	{
		if (rdoObj.checked)
		{
			strTxt = txtObj.value.toLowerCase();
			if (strTxt.indexOf("a") > 0)									// a  - attended
			{
				if (strTxt.charAt(strTxt.indexOf("a")+1) != "b")			// ab - absent
				{
					if (!confirm(msg))
						return false;
				}
			}
		}
	}
	
	return true;
}


/*****************************************************************************************************
Description	: Post the form once the validation is done depend on which button that is pressed.
                : keep track of the no. of clicks that user performed by the varSlotCount.
Parms		: Boolean (validateRadio(form))
Returns	        : FUNCTION - Boolean; Validation Yes(T)/No(F)
Notes		: Use in Booking page
Amendment       : CKB (20040204 - replaces the loop by for validateInput
******************************************************************************************************/
function postBookingPDIold(varSlotCount, form, url, radioMsg, checkMsg)
{				
       var ct = document.getElementById(varSlotCount);  
  
     //alert(ct.value);
   
     if (ct.value > 0)   // member has clicked on some slot, so display next screen
     {
		form.action = url;
		form.submit();		
      }
     else
     {
        alert(checkMsg);  // else display empty slot error
        return false;
     }  

}
/*****************************************************************************************************
Description	: Post the form once the validation is done depend on which button that is pressed.
                : keep track of the no. of clicks that user performed by the varSlotCount.
Parms		: Boolean (validateRadio(form))
Returns	        : FUNCTION - Boolean; Validation Yes(T)/No(F)
Notes		: Use in Booking page
Amendment       : CKB (20040204 - replaces the loop by for validateInput
		    : KL 20070903	- Firefox debug	
******************************************************************************************************/
function postBookingPDI(varSlotCount, form, url, radioMsg, checkMsg)
{				
       var ct = document.getElementById(varSlotCount);  
	   
	 //alert(ct.value);
	   
       var browser = navigator.appName
	   
	   //alert(browser);

     if (browser == "Netscape") {
 		if (ct.value != null)   // member has clicked on some slot, so display next screen
     		{
		form.action = url;
		form.submit();		
      	}
     		else
     		{
        	alert(checkMsg);  // else display empty slot error
        	return false;
     		}  

	}
   else
	{
     if ((ct.value > 0)||(ct.value != null))   // member has clicked on some slot, so display next screen
     {
		form.action = url;
		form.submit();		
     }
     else
     {
        alert(checkMsg);  // else display empty slot error
        return false;
     }  
	}
}


//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
function ZcellColorName(cellColor)
{
  var cellColorName; 
  cellColor = cellColor.toLowerCase();
  if (cellColor == "#ffffff") {
    cellColorName = "white";
  }
  else
  {
   cellColorName = cellColor;
  }
 
  return cellColorName;
  
}



//---------------------------------------------------------------------------------------------------
//Description	: Function for toggle the colour of the table cell and keep track of the clicks by member
//Parms			: ID (cell id)
//Returns		: None
//Notes			: None
//Amendment       : CKB (20040204 - replaces the loop by for validateInput
//Amendment		: KL (20070904 - Firefox debugging
//---------------------------------------------------------------------------------------------------
function SetCountAndToggleColorORG(obj, VarSlotCount) 
{
	
	var browser = navigator.appName
	if (browser == "Netscape") {
	var cellColor ="white";
	}
	else
	{
	var cellColor = "#ffffff";
	}	

	if (browser == "Netscape") {

      var ct = document.getElementById(VarSlotCount);

      var td = document.getElementById(obj);
	
	if (td.bgColor == cellColor){
		td.bgColor = "#d9e8f7";
		if (ct.value == null )
         ct.value= ct.value + 1;
	
	} else {
		td.bgColor = cellColor;
		if (ct.value != null)        
          ct.value=ct.value - 1;
	

	}
	}
	else
	{
	var ct = document.getElementById(VarSlotCount);
	    var td = document.getElementById(obj);

	if (td.bgColor == cellColor){
		td.bgColor = "#d9e8f7";
		if (ct != null)
         ct.value=eval(ct.value+1);
	} else {
		td.bgColor = cellColor;
		if (ct != null)        
          ct.value=eval(ct.value-1);
	}

	}
	//alert(ct.value);
}


function SetCountAndToggleColor(obj, VarSlotCount) 
{
	
	var browser = navigator.appName
//	if (browser == "Netscape") {
	var cellColor ="white";
//	}
//	else
//	{
//	var cellColor = "#ffffff";
//	}	

//	if (browser == "Netscape") {

//      var ct = document.getElementById(VarSlotCount);

//      var td = document.getElementById(obj);
	
//	if (td.bgColor == cellColor){
//		td.bgColor = "#d9e8f7";
//		if (ct.value == null )
 //        ct.value= ct.value + 1;
	
//	} else {
//		td.bgColor = cellColor;
//		if (ct.value != null)        
 //         ct.value=ct.value - 1;
//	}
//	}
//	else
	{
	  var ct = document.getElementById(VarSlotCount);
	  var td = document.getElementById(obj);

      var chkobj = obj.substring(4,obj.length);
      var checkbox = document.getElementById(chkobj);
  
   
  
      if (checkbox.checked==true) 
      {      
	   if (ct != null)
         ct.value=eval(ct.value+1);
	   }
	  else
	  {
		if (ct != null)        
          ct.value=eval(ct.value-1);
	  }
		     
    //alert(obj);
   // alert(chkobj);
   // alert(checkbox.checked);
   //alert(td.bgColor);
    //alert(ZcellColorName(td.bgColor));


    if (ZcellColorName(td.bgColor) == cellColor){
		  td.bgColor = "#d9e8f7";
		  //if (ct != null)
         // ct.value=eval(ct.value+1);
	  } else {
		  td.bgColor = cellColor;
		  //if (ct != null)        
          // ct.value=eval(ct.value-1);
	  }

   }
	
		 
	//alert(ct.value);
}


//-----------------------------------------------------------------------------
function SetCountAndToggleColorCell(obj) 
{
      var chkobj = obj.substring(4,obj.length);
      var checkbox = document.getElementById(chkobj);

      checkbox.click();
	  
	  //alert(chkobj);
}
//-----------------------------------------------------------------------------



//---------------------------------------------------------------------------------------------------
//Description	: Function for toggle the colour of the table cell and keep track of the clicks by member
//Parms			: ID (cell id)
//Returns		: None
//Notes			: None
//Amendment       : CKB (20040204 - replaces the loop by for validateInput
//Amendment		: KL (20070904 - Firefox debugging
//---------------------------------------------------------------------------------------------------
function SetMouseOverToggleColor(obj) 
{
	
	var browser = navigator.appName
//	if (browser == "Netscape") 
	   var cellColor ="white";
//	else
//	   var cellColor = "#ffffff";

//	if (browser == "Netscape") 
//	{
//      var td = document.getElementById(obj);
//	  if (td.bgColor == cellColor)
//	  	  td.bgColor = "#ffffff";
//	  else 
//		 td.bgColor = cellColor;
//	}
//	else
	{
	    var td = document.getElementById(obj);
	    if (ZcellColorName(td.bgColor) == cellColor) 
		    td.bgColor =  "#d9e8f7";
	    else  
		    td.bgColor = cellColor;
	}
	//alert(ct.value);
}



//---------------------------------------------------------------------------------------------------
//Description	: Function for toggle the colour of the table cell and keep track of the clicks by member
//Parms			: ID (cell id)
//Returns		: None
//Notes			: None
//Amendment       : CKB (20040204 - replaces the loop by for validateInput
//---------------------------------------------------------------------------------------------------
function SetCountAndToggleColorold(obj, VarSlotCount) 
{
	var cellColor = "#ffffff";

        var ct = document.getElementById(VarSlotCount);
	    var td = document.getElementById(obj);

	if (td.bgColor == cellColor){
		td.bgColor = "#d9e8f7";
		if (ct != null)
         ct.value=eval(ct.value+1);
	} else {
		td.bgColor = cellColor;
		if (ct != null)        
          ct.value=eval(ct.value-1);
	}
	
	//alert(ct.value);
}


function SetCountOptionButton(obj, VarSlotCount, varPrevSlot) 
{
	//var cellColor = "#ffffff";
	var cellColor ="white";
	   
        var ct = document.getElementById(VarSlotCount);
	    var td = document.getElementById(obj);
        var ps = document.getElementById(varPrevSlot);
        
        
        ///alert(ps.value);
        
      // if (ps.value!='')
          var pd = document.getElementById(ps.value);
        
		
      if (ZcellColorName(td.bgColor) == cellColor){
		  td.bgColor = "#d9e8f7";
	  } else {
		  td.bgColor = cellColor;

	  }
		
		
	if (pd !=null) {
		pd.bgColor = cellColor;
	}

	if (ct != null)
		   ct.value = 1;
		   
    //alert(td.id);
    ///alert(ps.value);
	ps.value=td.id;

	//alert(ct.value);
   // alert(pd.value);
}


function SetCountOptionButtonORG(obj, VarSlotCount, varPrevSlot) 
{
	var cellColor = "#ffffff";

        var ct = document.getElementById(VarSlotCount);
	    var td = document.getElementById(obj);
        var ps = document.getElementById(varPrevSlot);
        
        
        ///alert(ps.value);
        
      // if (ps.value!='')
          var pd = document.getElementById(ps.value);
        
	if (td.bgColor == cellColor){
		td.bgColor = "#d9e8f7";
	} 
	
	
	if (pd !=null) {
		pd.bgColor = cellColor;
	}
	
	if (ct != null)
		   ct.value = 1;
		   
    //alert(td.id);
    ///alert(ps.value);
	ps.value=td.id;

	//alert(ct.value);
   // alert(pd.value);
}


//******************************************************************************************************/



//---------------------------------------------------------------------------------------------------
//Description	: Validate if expiry date is <= today
//Parms			: String (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------

function isExpiryDateValid(obj) 
{	
	var isValid = true;
	var nowDate = new Date();		
	var expDate = obj.value;
	var strLength = obj.value.length;
	
	if (strLength == 5)
	{
		var expiresMonth;
		var expiresYear;
		
		expiresMonth = expDate.substr(0, 2);
		tempYear = expDate.substr(3, 5);		
		
		//from 1991-2079
		if (tempYear > 90)
			expiresYear = "19" + tempYear;
		else if (tempYear < 80)
			expiresYear = "20" + tempYear;
		
		//alert(expiresMonth);
		//alert(expiresYear);			
		
		today = new Date();
		expiry = new Date(expiresYear, expiresMonth);	
		
		if (today.getTime() > expiry.getTime())
			isValid = false;	
			
	}

	return isValid;

}


//---------------------------------------------------------------------------------------------------
//Description	: Validate if argument is made up of currency. 
//Parms			: String (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------

function isCurrency(obj) 
{	
	var strText = obj.value;
	var strLength = strText.length;
	var strSpecialChar = ".";
	var intSearch;
	var firstIndex, lastIndex;
	
	if (strText.length>0)	{
		firstIndex = strText.indexOf('.');
		lastIndex = strText.lastIndexOf('.');
		
		if (firstIndex!=lastIndex) return false;
		if (firstIndex==0) return false;	
		if (firstIndex==(strText.length-1)) return false;
 
		for (var i=0; i!=strLength; i++) {
			chrChar = strText.substring(i, i+1);
			intSearch = strSpecialChar.indexOf(chrChar);
			if (intSearch == -1 && chrChar < "0" || chrChar > "9") {
				return false;
			}
		}
	}
	return true;

}
//---------------------------------------------------------------------------------------------------
//Description	: Validate if argument is made up of currency. 
//Parms			: String (text field)
//Returns		: FUNCTION - alert Message
//Notes			: None.
//---------------------------------------------------------------------------------------------------

function IsCurrency(obj) 
{	
	var strText = obj.value;
	var strLength = strText.length;
	var strSpecialChar = ".";
	var intSearch;
	var firstIndex, lastIndex;
	
	firstIndex = strText.indexOf('.');
	lastIndex = strText.lastIndexOf('.');
	
	if (firstIndex!=lastIndex) isCur=false;
	if (firstIndex==0) isCur=false;
	if (firstIndex==(strText.length-1)) isCur=false;
 
	for (var i=0; i!=strLength; i++) {
		chrChar = strText.substring(i, i+1);
		intSearch = strSpecialChar.indexOf(chrChar);
		if (intSearch == -1 && chrChar < "0" || chrChar > "9") {
			//isCur=false;
	alert("Invalid input!!Charge can contain currency charecters!!");
	 obj.value="";
	 obj.focus();
	 break;
	  
			}
	}
 

}

//---------------------------------------------------------------------------------------------------
//Description	: Validate if argument is made up of float or numbers. 
//Parms			: String (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function isNumber(obj) 
{	
	var strText = obj.value;
	var strLength = strText.length;
	var strSpecialChar = ".";
	var intSearch;
	var firstIndex, lastIndex;
	
	firstIndex = strText.indexOf('.');
	lastIndex = strText.lastIndexOf('.');
	
	if (firstIndex!=lastIndex) return false;
 
 
	for (var i=0; i!=strLength; i++) {
		chrChar = strText.substring(i, i+1);
		intSearch = strSpecialChar.indexOf(chrChar);
		if (intSearch == -1 && chrChar < "0" || chrChar > "9") {
			return false;
		}
	}
	return true;

}

//---------------------------------------------------------------------------------------------------
//Description	: Validate if argument is made up of email address
//Parms			: String (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function isEmailAddress(obj) 
{					

	var strText = obj.value;
	var strLength = strText.length;
	var strSpecialChar = "_.@-";
	var intSearch;
	var firstIndex, lastIndex;
		
	if (strLength > 0){	
		firstIndex = strText.indexOf('@');
		lastIndex = strText.lastIndexOf('@');
	
		if (firstIndex!=lastIndex || firstIndex==-1) return false;
			
		for (var i=0; i!=strLength; i++) {
			chrChar = strText.substring(i, i+1);
			intSearch = strSpecialChar.indexOf(chrChar);
			
			if (intSearch == -1)
			   if (chrChar < "0" || chrChar > "9")	
				  if (chrChar<"A" || chrChar>"Z") 
				     if (chrChar<"a" || chrChar>"z") {
						return false;
					 }	
			
		}
	}
	return true;
}

//---------------------------------------------------------------------------------------------------
//Description	: Validate if number less than 0 and more than 100
//Parms			: Object (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function isPercentage(obj)
{
	var strText = obj.value;
	var intText = Number(strText);	
	
	if ((intText < 0) ||(intText > 100)){		
		return false;
	}
	return true;
}

//---------------------------------------------------------------------------------------------------
//Description	: Validate if 2 string is the same
//Parms			: Object (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function isSameString(obj)
{	
	var nm, nm2, idno;
	idno = obj.id;
	
	nm2 = document.getElementById(idno);
	a = Number(idno) - 1;
	nm = document.getElementById(a);
		
	fValue = nm.value;		
	sValue = nm2.value;
	
	if (fValue != sValue){		
		return false;
	}
	return true;
}


//---------------------------------------------------------------------------------------------------
//Description	: Validate if argument is made up of alphabets and a few special characters.
//Parms			: Object (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function isAlphabet(obj) 
{
	var strText = obj.value;
	var strLength = strText.length;
	var strSpecialChar = ".,-";
	var intSearch;

	for (var i=0; i!=strLength; i++) {         
		chrChar = strText.substring(i, i+1);
		chrChar = chrChar.toUpperCase();
		intSearch = strSpecialChar.indexOf(chrChar);
		if (intSearch == -1 && (chrChar < "A" || chrChar > "Z" )) {
			return false;
		} 
	}
	return true;
}


//---------------------------------------------------------------------------------------------------
//Description	: Validate if argument is made up of numbers. 
//Parms			: Object (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function isNumeric(obj) 
{
	var strText = obj.value;
	var strLength = strText.length;
	
	for (var i=0; i!=strLength; i++) {
		chrChar = strText.substring(i, i+1);
		if (chrChar < "0" || chrChar > "9") {
			return false;
		}
	}
	return true;
}


//---------------------------------------------------------------------------------------------------
//Description	: Validate if argument is made up of alphabets, numbers & a few special characters.
//Parms			: Object (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function isAlphaNumeric(obj) 
{
	var strText = obj.value;
	var strLength = strText.length;
	var strSpecialChar = ".,- ";
	var intSearch;

	for (var i=0; i!=strLength; i++) {         
		chrChar = strText.substring(i, i+1);
		chrChar = chrChar.toUpperCase();
		intSearch = strSpecialChar.indexOf(chrChar);
		if (intSearch == -1 && (chrChar < "A" || chrChar > "Z" ) && (chrChar < "0" || chrChar > "9")) {
//		if ((chrChar < "A" || chrChar > "Z" ) && (chrChar < "0" || chrChar > "9")) {
			return false;
		} 
	}
	return true;
}	



//---------------------------------------------------------------------------------------------------
//Description	: Validate if argument is made up of alphabets & numbers.
//Parms			: Object (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function isAlphaNumericNoSpace(obj) 
{
	var strText = obj.value;
	var strLength = strText.length;	

	for (var i=0; i!=strLength; i++) {         
		chrChar = strText.substring(i, i+1);
		chrChar = chrChar.toUpperCase();		
		if ((chrChar < "A" || chrChar > "Z" ) && (chrChar < "0" || chrChar > "9")) {
			return false;
		} 
	}
	return true;
}	


//---------------------------------------------------------------------------------------------------
//Description	: Validate if argument is a valid phone/fax number. 
//Parms			: Object (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function isPhone(obj) 
{
	var strText = obj.value;
	var strLength = strText.length;
	var strSpecialChar = "()-";
	var intSearch;

	for (var i=0; i!=strLength; i++) {         
		chrChar = strText.substring(i, i+1);
		intSearch = strSpecialChar.indexOf(chrChar);
		if (intSearch == -1 && (chrChar < "0" || chrChar > "9")) {
			return false;
		} 
	}
	return true;
}	


//---------------------------------------------------------------------------------------------------
//Description	: Validate if argument is empty.
//Parms			: Object (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function isEmpty(obj) 
{
	var strText = obj.value;
	var strLength = strText.length;		
	var blnEmpty=true;    
	

	for (var i=0; i!=strLength; i++) {
		chrChar = strText.substring(i, i+1);
     	if (chrChar==" ") {
			continue;
 		} else {
			blnEmpty=false;
		}
	}      
	return blnEmpty;	
}	
	

//--------------------------------------------------------------------------------------------
//Description	: Called by Function isEarlierThanToday() to convert the month format.
//				  Get day month year. 
//				  Convert month from alphabet to number ("JAN" to "1"). 
//				  Combine day month year into "MM-DD-YYYY".
//Parms			: String (text field)
//Returns		: FUNCTION - String(Date); 
//Notes			: None.
//--------------------------------------------------------------------------------------------
function convertMonthToInteger(day, month, year) 
{
	var strDay = day;
	var strMonth = month;
	var strYear = year;
	var strCombine;
	
	if (strMonth == "JAN")
		strMonth = "1";
	else if (strMonth == "FEB")
		strMonth = "2";
	else if (strMonth == "MAR")
		strMonth = "3";
	else if (strMonth == "APR")
		strMonth = "4";
	else if (strMonth == "MAY")
		strMonth = "5";
	else if (strMonth == "JUN")
		strMonth = "6";
	else if (strMonth == "JUL")
		strMonth = "7";
	else if (strMonth == "AUG")
		strMonth = "8";
	else if (strMonth == "SEP")
		strMonth = "9";
	else if (strMonth == "OCT")
		strMonth = "10";
	else if (strMonth == "NOV")
		strMonth = "11";
	else if (strMonth == "DEC")
		strMonth = "12";	
	
	strCombine = strMonth + "-" + strDay + "-" + strYear;	
	return strCombine;
		
}


//--------------------------------------------------------------------------------------------
//Description	: Validate if the date entered is earlier than today's date. 
//				  First call function convertMonthToInteger() to convert month from alphabet to number ("JAN" to "1").
//Parms			: Object (day, month, year)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//--------------------------------------------------------------------------------------------
function isEarlierThanToday(day, month, year) 
{	
	var todayDate, enteredDate;
	var result = convertMonthToInteger(day.value, month.value, year.value);
	
	n = new Date();		
	enter = new Date(result);

	todayDate = n.getTime();  
	enteredDate = enter.getTime();
	
	if (todayDate > enteredDate) {
	   return true;
	} else if (todayDate < enteredDate) {
	   return false;
	}
}

//---------------------------------------------------------------------------------------------------
//Description	: Validate if argument is in a valid date format.
//Parms			: Object (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//---------------------------------------------------------------------------------------------------
//function isDate(obj) 
//{	
//	var strText = obj.value;
//	var strSpecialChar = "/-.";
//	var intSearch;
//	var element;
//	var chr;
//	var bolReturn=false;
//	
//alert(strText);


//	for ( var i=0 ; i< strSpecialChar.length ; i++ ) {
//		chr = strSpecialChar.charAt(i);
//		intSearch = strText.indexOf(chr);
//		if (intSearch!=-1) break;
//	}
	
//	element = strText.split(chr);	
		
//	if (element.length==3) {
//		var month=parseInt(element[1]);
//		var day=parseInt(element[0]);
//		var year=parseInt(element[2]);
		
          
//        alert ("month="+month);
          
//		if (year<100) {
//			year = year + 2000	;
//		}
          
//		//check if month and day is correct. for month feb, consider correct if day within 29
//		if (month>=1 && month<=12) {
//			if ((month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) && day>=1 && day<=31)  {
//				bolReturn=true;	 
//			}	     
//			else if ((month==4 || month==6 || month==9 || month==11) && day>=1 && day<=30)  {
//				bolReturn=true;
//			}
//			else if ((month==2 && day>=1 && day<=29)) {
//				bolReturn=true;
//			}
//		}
//	}
//	return bolReturn;
//}


//----------------------------------------------------------------------------------------------------
//Description	: Function for validate date entered
//Parms			: Date
//Returns		: None
//Notes			: None
//----------------------------------------------------------------------------------------------------
function isDate(thisdate) 
{
	var err=0;
	var bolReturn=false;
			
	a=thisdate.value
	if (a.length != 10) err=1
	b = a.substring(3, 5) // month
	c = a.substring(2, 3)// '/'
	d = a.substring(0, 2) // day
	e = a.substring(5, 6)// '/'
	f = a.substring(6, 10) // year
	if (b<1 || b>12) err = 1
	if (d<1 || d>31) err = 1
	if (f<=1800) err = 1
	if (b==4 || b==6 || b==9 || b==11){
		if (d==31) err=1
	}
	if (b==2){
		var g=parseInt(f/4)
		if (isNaN(g)) {
			err=1
		}
		if (d>29) err=1
		if (d==29 && ((f/4)!=parseInt(f/4))) err=1
	}		
	
	if (isNaN(b)||isNaN(d)||isNaN(f))
		 err=1	
	
	if (err==1) {
		//alert(thisdate.value + ' is not a valid date. Please re-enter.');		
		thisdate.value = ""
		return bolReturn;
	}	
	
	return true;
}



//---------------------------------------------------------------------------------------------------
//Description	: Set today's date to be used in the daysInMonth(), changeOptionDays(), 
//                writeYearOption() functions.
//Parms			: 
//Returns		: 
//Notes			: 
//---------------------------------------------------------------------------------------------------
Now = new Date();
NowDay = Now.getDate();
NowMonth = Now.getMonth();
NowYear = Now.getYear();


//---------------------------------------------------------------------------------------------------
//Description	: Function for returning how many days there are in a month including leap years
//Parms			: String (combo box)
//Returns		: FUNCTION - String; Days in month
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function daysInMonth(WhichMonth, WhichYear)
{
  var daysInMonth = 31;
  if (WhichMonth == "April" || WhichMonth == "June" || WhichMonth == "September" || WhichMonth == "November") daysInMonth = 30;
  if (WhichMonth == "February" && (WhichYear/4) != Math.floor(WhichYear/4))	daysInMonth = 28;
  if (WhichMonth == "February" && (WhichYear/4) == Math.floor(WhichYear/4))	daysInMonth = 29;
  return daysInMonth;
}


//---------------------------------------------------------------------------------------------------
//Description	: Function to change the available days for the day combo box dynamically according
//				  to the month or leap  year selected.
//Parms			: String (combo box) and form name
//Returns		: None.
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function changeOptionDays(Which, form)
{
 // DaysObject = eval("document." + form + "." + Which + "Day");
 // MonthObject = eval("document." + form + "." + Which + "Month");
 // YearObject = eval("document." + form + "." + Which + "Year");

  DaysObject = eval("document.all('" + Which + "Day')");
  MonthObject = eval("document.all('" + Which + "Month')");
  YearObject = eval("document.all('" + Which + "Year')");

  Month = MonthObject[MonthObject.selectedIndex].text;
  Year = YearObject[YearObject.selectedIndex].text;

  DaysForThisSelection = daysInMonth(Month, Year);
  CurrentDaysInSelection = DaysObject.length - 1;  
  
  if (CurrentDaysInSelection > DaysForThisSelection)
  {
    for (i=0; i<(CurrentDaysInSelection-DaysForThisSelection); i++)
    {
      DaysObject.options[DaysObject.options.length - 1] = null
    }
  }
  if (DaysForThisSelection > CurrentDaysInSelection)
  {
    for (i=0; i<(DaysForThisSelection-CurrentDaysInSelection); i++)
    {
      //NewOption = new Option(DaysObject.options.length + 1);  
      dayLength =  DaysObject.options.length - 1        
      NewOption = new Option(dayLength + 1);      
      DaysObject.add(NewOption);
      
    }
  }
    if (DaysObject.selectedIndex < 0) DaysObject.selectedIndex == 0;
}


//---------------------------------------------------------------------------------------------------
//Description	: Function to write option years plus x
//Parms			: None.
//Returns		: HTML Code.
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function writeYearOptions()
{
  year = 1980;
  newYear = (NowYear - year) + 10;
  line = "";
  for (i=0; i<newYear; i++)
  {
  	var j = parseInt(year) + i;
    line += "<OPTION value=" + j + ">";
    line += year + i;
  }
  return line;
}


//---------------------------------------------------------------------------------------------------
//Description	: Function to split the date to day, month and year
//Parms			: String date
//Returns		: date array in string
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function splitDate(strDate)
{	
	myString = new String(strDate)	
	splitString = myString.split("-")	

	return splitString;
}


//---------------------------------------------------------------------------------------------------
//Description	: Function to split the date to day, month and year, then change the combo box 
//				  according to the value dynamically.
//Parms			: String date, form name and combo box name
//Returns		: None.
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function splitToComboDate(strDate, form, which)
{	
	myString = new String(strDate)	
	splitString = myString.split("-")	
	
	DaysObject = eval("document." + form + "." + which + "Day");
  	MonthObject = eval("document." + form + "." + which + "Month");
  	YearObject = eval("document." + form + "." + which + "Year");
  	
  	DaysObject.value = splitString[0];
  	MonthObject.value = splitString[1];
  	YearObject.value = splitString[2]; 	 	
		
}


//--------------------------------------------------------------------------------------------
//Description	: Returns a String containing a copy of a specified string without leading spaces. 
//Parms			: String = The required string argument is any valid string expression. 
//				  If string contains null, false is returned
//Returns		: String
//Notes			: None.
//--------------------------------------------------------------------------------------------
function LTrim(String)
{
	var i = 0;
	var j = String.length - 1;

	if (String == null)
		return (false);

	for (i = 0; i < String.length; i++)
	{
		if (String.substr(i, 1) != ' ' &&
		    String.substr(i, 1) != '\t')
			break;
	}

	if (i <= j)
		return (String.substr(i, (j+1)-i));
	else
		return ('');
}


//--------------------------------------------------------------------------------------------
//Description	: Returns a String containing a copy of a specified string without trailing spaces. 
//Parms			: String = The required string argument is any valid string expression. 
//				  If string contains null, false is returned
//Returns		: String
//Notes			: None.
//--------------------------------------------------------------------------------------------

function RTrim(String)
{
	var i = 0;
	var j = String.length - 1;

	if (String == null)
		return (false);

	for(j = String.length - 1; j >= 0; j--)
	{
		if (String.substr(j, 1) != ' ' &&
			String.substr(j, 1) != '\t')
		break;
	}

	if (i <= j)
		return (String.substr(i, (j+1)-i));
	else
		return ('');
}


//--------------------------------------------------------------------------------------------
//Description	: Returns a String containing a copy of a specified string without both 
//                leading and trailing spaces.
//Parms			: String = The required string argument is any valid string expression. 
//				  If string contains null, false is returned
//Returns		: String
//Notes			: None.
//--------------------------------------------------------------------------------------------
function Trim(String)
{
	if (String == null)
		return (false);

	return RTrim(LTrim(String));
}


//--------------------------------------------------------------------------------------------
//Description	: Validate if argument contain spaces in between.
//Parms			: Objects (text field)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//--------------------------------------------------------------------------------------------
function containSpace(obj) {
	var strText = Trim(obj.value);
	var strLength = strText.length;		
	
	for (var i=0; i!=strLength; i++) {
		chrChar = strText.substring(i, i+1);	
		if (chrChar == " " || chrChar == null) {
			return true;
		}
	}
	return false;		
}

//--------------------------------------------------------------------------------------------
//Description	: Validate if the checkboxes is ticked
//Parms			: Objects (checkbox)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//--------------------------------------------------------------------------------------------
function isCheckBoxEmpty(objid) 
{		
	var i, len, chk, allobj;	

	allobj=document.all[objid];

	//if there is a form in the page, perform below checking
     chk=true;
	 len = allobj.length;	
	 	 
	 	 
	// if there is only one checkbox
	if (len==undefined) {
     //alert("allobj.value="+allobj.value+":"+allobj.checked);
	 //alert("allobj.length="+allobj.length);
	   if (allobj.checked == true)
	     chk = false;	 	 
	} 	 
	 	 
	for (i=0; i < len; i++ )
    {	
     /// alert("allobj.value="+allobj[i].value+":"+allobj[i].checked);
   
	 if (allobj[i].checked == true)
	 {
	     chk = false;	 
		 break;
	  }
	} 
	
 return chk;
			
}


//--------------------------------------------------------------------------------------------
//Description	: Validate if the checkboxes is ticked
//Parms			: Objects (checkbox)
//Returns		: FUNCTION - Boolean; Validation Yes(T)/No(F).
//Notes			: None.
//--------------------------------------------------------------------------------------------
function isRadioEmpty(objid) 
{		
	var i, len, chk, allobj;	

	allobj=document.all[objid];

	//if there is a form in the page, perform below checking
     chk=true;
	 len = allobj.length;	
	 	 
	 	 
	// if there is only one radiobox
	if (len==undefined) {
	   if (allobj.checked == true)
	     chk = false;	 	 
	} 	 
	 	 
	for (i=0; i < len; i++ )
    {	
 	 if (allobj[i].checked == true)
	 {
	     chk = false;	 
		 break;
	  }
	} 
	
  return chk;
			
}


//--------------------------------------------------------------------------------------------
//Description	: Validation Object and various of its function.
//Methods		: setSpan( spanid ), setRule( inputName, columnid, columnName, rule ), check()
//Returns		: check() returns true/false to onsubmit event.
//Examples		: 
//              <script language="javascript">
//    				var valid = new Validation();
//				    valid.setSpan("error");
//				    valid.setRule("field1", "s_field1", "Alphabet field", "ALPHA");
//    				valid.setRule("field2", "s_field2", "Numeric field", "NUMERIC");
//    				valid.setRule("field3", "s_field3", "AlphaNumeric field", "ALPNUM");
//    				valid.setRule("field4", "s_field4", "Required field", "REQUIRED");
//             </script>
//
//			   <span id="error"></span>
//             <FORM ... ONSUBMIT="return valid.check();">
//             <span id="s_field1">Alphabet:</span><INPUT TYPE=TEXT NAME="field1" SIZE=30 VALUE="">
//  		   <span id="s_field2">Numeric:</span><INPUT TYPE=TEXT NAME="field2" SIZE=30 VALUE="">
//             <span id="s_field3">Alpha Numeric:</span><INPUT TYPE=TEXT NAME="field3" SIZE=30 VALUE="">
//             <span id="s_field4">Required:</span><INPUT TYPE=TEXT NAME="field4" SIZE=30 VALUE="">
//--------------------------------------------------------------------------------------------

//-----------------------------------------Beginning of Validation Object----------------------
function Validation() {

   this.setRule = setRule;
   this.check = check;
   this.setSpan = setSpan;
   this.setTblSpan = setTblSpan;
   this.showMessage = showMessage;

   this.rules = new Array();   
   this.rsize=0;
   this.errorSpan=null;
   this.TblSpan=null;
}

function ValidationRule(inputName, fieldid, fieldName, rule) {
  this.rule = rule;
  this.input = inputName;
  this.field = fieldid;
  this.fieldName = fieldName;
}
    
function setRule( inputName, field, fieldName, rule) {
   this.rules[this.rsize] = new ValidationRule(inputName, field, fieldName, rule);
   this.rsize++;
}


function setSpan(spanid) {
   this.errorSpan = spanid;
}


function setTblSpan(spanid) {

   this.TblSpan = spanid;
}


function hideSpan(spanid) {

   spanid.style.visibility = 'hidden';
}

function showMessage(message) {
var span, TblSpan;

	span = document.all(this.errorSpan);
	span.innerText = "";
	span.style.color="BLACK";

	TblSpan = document.all(this.TblSpan);
    span.innerText =  message + span.innerText + "\n "  ;
    span.style.color="#CC0009";
    
     TblSpan.style.visibility = "visible";    
}

function check() {
var r, input, field, span, fieldName, TblSpan;
var ret=true;
var firstFocus=null;

var CheckRadioisEmpty=false;

span = document.all(this.errorSpan);
span.innerText = "";
span.style.color="BLACK";


TblSpan = document.all(this.TblSpan);

  //turn all text back to black color
  for (var i = 0 ; i<this.rsize ; i++ ) {
    r = this.rules[i];    
    input = document.all(r.input);
    field = document.all(r.field);
    fieldName = r.fieldName;    
    field.style.color="black";

  }
	
  for (var i = 0 ; i<this.rsize ; i++ ) {
    r = this.rules[i];    
  
     input = document.all(r.input);
    
 
   // input = document.getElementById(r.input); // does not work in Google Chrome.. 20Aug2015
    
  
	
    field = document.all(r.field);
    fieldName = r.fieldName;    
    
    if (r.rule.toLowerCase().indexOf("alpha")>=0) {
       if (!isAlphabet(input)) {
          span.innerText = span.innerText + "\n* " + fieldName + " can only contain alphabet characters.";
          span.style.color="#CC0009";
          field.style.color="#CC0009";
          ret =false;
       } 
    }
    
    if (r.rule.toLowerCase().indexOf("percentage")>=0) {
       if (!isPercentage(input)) {
          span.innerText = span.innerText + "\n* " + fieldName + " can only contain 0-100.";
          span.style.color="#CC0009";
          field.style.color="#CC0009";
          ret =false;
       } 
    }
    
       
    if (r.rule.toLowerCase().indexOf("length")>=0) {		
		//if (!checkLength(input,input.value.length)) {	
		if ((input.value.length>0) && (isNumeric(input))) {			
			if (!checkLength(input)) {
				span.innerText = span.innerText + "\n* " + fieldName + " must contain " + input.size + " integer.";
				span.style.color="#CC0009";
				field.style.color="#CC0009";
				ret =false;
			} 
		}
    }
    
    if (r.rule.toLowerCase().indexOf("expiry")>=0) {
       if (!isExpiryDateValid(input)) {
         span.innerText = span.innerText + "\n* " +  fieldName + " must not expired.";
         span.style.color="#CC0009";
         field.style.color="#CC0009";
         ret= false;
       } 
    }
    
    if (r.rule.toLowerCase().indexOf("numeric")>=0) {
       if (!isNumeric(input)) {
         span.innerText = span.innerText + "\n* " +  fieldName + " can only contain numeric characters."; ////////
         span.style.color="#CC0009";
         field.style.color="#CC0009";
         ret= false;
       } 
    }
    
 
	
	if (r.rule.toLowerCase().indexOf("currency")>=0) {
       if (!isCurrency(input)) {
         span.innerText = span.innerText + "\n* " +  fieldName + " can only contain currency characters.";
         span.style.color="#CC0009";
         field.style.color="#CC0009";
         ret= false;
       } 
    }
    
    if (r.rule.toLowerCase().indexOf("number")>=0) {
	 if (input.style.visibility != "hidden")	
    {	
       if (!isNumber(input)) {
         span.innerText = span.innerText + "\n* " +  fieldName + " can only contain number characters.";  
         span.style.color="#CC0009";
         field.style.color="#CC0009";
         ret= false;
       } 
	 }
    }
    
    if (r.rule.toLowerCase().indexOf("alpnum")>=0) {
 	 if (input.style.visibility != "hidden")	
     {
       if (!isAlphaNumeric(input)) {
          span.innerText = span.innerText + "\n* " +  fieldName + " can only contain alphabet and numeric characters.";
          span.style.color="#CC0009";
          field.style.color="#CC0009";
          ret= false;
       }
	 }
    }
    	
    if (r.rule.toLowerCase().indexOf("required")>=0) {
	 if (input.style.visibility != "hidden")	
      {
	   if (isEmpty(input)) {
          span.innerText =  span.innerText + "\n* " + fieldName + " is required.";
          span.style.color="#CC0009";
          field.style.color="#CC0009";
          ret= false;
         
       }
	  }
    }



    if (r.rule.toLowerCase().indexOf("radiobutton")>=0) {
        
     if (input != null)
     {
       if (isRadioEmpty(r.input)) {	
          span.innerText =  span.innerText + "\n* " + fieldName + " is required.";
          span.style.color="#CC0009";
          field.style.color="#CC0009";
          ret= false;
            CheckRadioisEmpty=true; 
       }
     }   
    }
  
     
    if (r.rule.toLowerCase().indexOf("checkbox")>=0) {
     // alert("checkbox:"+input);
    
      if (input != null)
      {   
        if (isCheckBoxEmpty(r.input)) {	
          span.innerText =  span.innerText + "\n* At least one " + fieldName + " must be checked.";
          span.style.color="#CC0009";
          field.style.color="#CC0009";
      
          ret= false;
       } 
     }
    }


    
    if (r.rule.toLowerCase().indexOf("phone")>=0) {
       if (!isPhone(input)) {
          span.innerText =  span.innerText + "\n* " + fieldName + " is not a valid phone number.";
          span.style.color="#CC0009";
          field.style.color="#CC0009";
          ret= false;
       } 
    }
    
    if (r.rule.toLowerCase().indexOf("date")>=0) {
		if (input.value.length>0){		
			if (!isDate(input)) {
			   span.innerText =  span.innerText + "\n* " + fieldName + " is not a valid date.";
			   span.style.color="#CC0009";
			   field.style.color="#CC0009";
			   ret= false;
			} 
		}
    }
    
    if (r.rule.toLowerCase().indexOf("email")>=0) {
       if (!isEmailAddress(input)) {
          span.innerText =  span.innerText + "\n* " + fieldName + " is not a valid email addresss.";
          span.style.color="#CC0009";
          field.style.color="#CC0009";
          ret= false;
       } 
    }

    if (r.rule.toLowerCase().indexOf("nospace")>=0) {
       if (containSpace(input)) {
          span.innerText =  span.innerText + "\n* " + fieldName + " must not contain space.";
          span.style.color="#CC0009";
          field.style.color="#CC0009";
          ret= false;
       }
    }          
    
    //added by vunloon
   
     if (ret==false && firstFocus==null)
      if (!CheckRadioisEmpty)
        firstFocus=input;
    
    
  }




   if (ret == false)
     TblSpan.style.visibility = "visible";
     
   //added by vunloon
  
    if (firstFocus!=null) {
       
       firstFocus.focus();
    }
   
   
     
  return ret;
}
//-----------------------------------------End of Validation Object----------------------------------


//---------------------------------------------------------------------------------------------------------------
//Description	: Cell Object and various of its function.
//Methods		: toggleColor(obj), verifyCheckBox() 
//Returns		: Change the colour of the cell.
//Examples		: 
//----------------------------------------------------------------------------------------------------------------

//------------------------------------------------Beginning of Cell Object----------------------------------------
//---------------------------------------------------------------------------------------------------
//Description	: Function for toggle the colour of the table cell.
//Parms			: ID (cell id)
//Returns		: None
//Notes			: None
//---------------------------------------------------------------------------------------------------
function toggleColor(obj) 
{
	var cellColor = "#ffffff";
	var td = document.getElementById(obj);
	if (td.bgColor == cellColor){
		td.bgColor = "#d9e8f7";
	} else {
		td.bgColor = cellColor;
	}
}

//---------------------------------------------------------------------------------------------------
//Description	: Function for toggle the colour of the table cell.
//Parms			: ID (cell id)
//Returns		: None
//Notes			: None
//---------------------------------------------------------------------------------------------------
function toggleColorCancel(cellColor, obj) 
{
	//var cellColor = "#ffffff";
	// case is impt;
	
	var td = document.getElementById(obj);
	
	//alert('mm');
	//alert(cellColor);
	//alert(td.bgColor);
	
	if (td.bgColor == cellColor){
		td.bgColor = "#d9e8f7";
	} else {
		td.bgColor = cellColor;
	}
}

//----------------------------------------------------------------------------------------------------
//Description	: Function for verify whether the checkbox is checked or not. if yes, call toggleColor function.
//Parms			: None
//Returns		: None
//Notes			: None
//----------------------------------------------------------------------------------------------------

function verifyCheckBox_org() 
{		
	var intCounter, checkIndex;	
	
	//if there is a form in the page, perform below checking
	if (document.forms(0) != null) {	
		var intLength = document.forms(0).elements.length;	
		for (intCounter=0; intCounter < intLength; intCounter++ )
		{	
			checkIndex = document.forms(0).elements[intCounter];   	 
			checkID = "cell" + document.forms(0).elements[intCounter].id;	    	   				
		    if (checkIndex.checked == true)
		    {				
				toggleColor(checkID);	    
   		    }		     
		}	
	}		
}


function verifyCheckBox() 
{		
	var intCounter, checkIndex;	
	
	//if there is a form in the page, perform below checking
	if (document.forms[0] != null) {	
		var intLength = document.forms[0].elements.length;	
		for (intCounter=0; intCounter < intLength; intCounter++ )
		{	
			checkIndex = document.forms[0].elements[intCounter];   	 
			checkID = "cell" + document.forms[0].elements[intCounter].id;	    	   				
		    if (checkIndex.checked == true)
		    {				
				//toggleColor(checkID);	    
   
   
                                // varSlotCount is the table id in form from fnc-PDI-circuitbooking1.asp ..ckb
                                SetCountAndToggleColor(checkID, 'varSlotCount');  
		    }		     
		}	
	}		
}


//---------------------------------------------------------------------------------------------------
//Description	: Function for toggle the colour of the table row.
//Parms			: ID (row id), total row
//Returns		: None
//Notes			: None
//---------------------------------------------------------------------------------------------------
function fToggleRowColor(counter, objid) {
	var toggleColor = "#ffffff";
	var tr = document.all ? document.all[objid] : document.getElementById(objid);

	for (var c = 1; c <= counter; c++){
		var rowID;
		rowID = "row" + c;
	//	alert(document.getElementById(rowID).id);		
		document.getElementById(rowID).bgColor = toggleColor;
	}

	if (tr.bgColor == toggleColor){
		tr.bgColor = "FFFFE0";
	} else {
		tr.bgColor = toggleColor;
	}
}
//------------------------------------------------End of Cell Object----------------------------------------


//---------------------------------------------------------------------------------------------------------------
//Description	: Date Object and various of its function.
//Methods		: formatDate(i, delKey, direction), checkDate(THISDATE) 
//Returns		: Arrange the date value and add in "/"
//Examples		: 
//----------------------------------------------------------------------------------------------------------------

function restrictAlphabet(obj, e) {

	var strCheck = '0123456789';

	var whichCode = (window.Event) ? e.which : e.keyCode;
	if (whichCode == 13) return true;  // Enter
	key = String.fromCharCode(whichCode);  // Get key value from key code
	if (strCheck.indexOf(key) == -1) 
		return false;  // Not a valid key
	else
		return true;
}


//----------------------------------------------------------------------------------------------------
//Description	: Function for format date to dd/mm/yy
//Parms			: 
//Returns		: None
//Notes			: None
//----------------------------------------------------------------------------------------------------
function formatDate(i, delKey, direction) 
{
  if (i.value.length < 10) {
  	if (delKey!=9) { //tab
	  	if(delKey!=8 && delKey!=46 && delKey!=16 &&  !(delKey>36 && delKey<41)){ //if the delete, backspace, shift, are not the keys that caused the keyup event.
  			var fieldLen = i.value.length
   			if ((delKey >= 48 && delKey <= 57) || (delKey >= 96 && delKey <=105)) {
   				if (fieldLen == 2 || fieldLen == 5) {
      				i.value = i.value + "/";
		     	}
   			} else {
   				if (direction == "up"||direction==1) {
     				if (i.value.length == 0) {
      					i.value = ""
	     			} else {
		      			i.value = i.value.substring(0,i.value.length-1)
	   				}
    			}
	 		}
  			i.focus()
	  	}
 	} else {
 		if (direction == "down"||direction==0) {
	 		checkDate(i)
  		}
  	}
 }
}


//----------------------------------------------------------------------------------------------------
//Description	: Function for validate date entered
//Parms			: Date
//Returns		: None
//Notes			: None
//----------------------------------------------------------------------------------------------------
function checkDate(thisdate) 
{
	var err=0;
	var bolReturn=false;
			
	a=thisdate.value
	if (a.length != 10) err=1
	b = a.substring(3, 5) // month
	c = a.substring(2, 3)// '/'
	d = a.substring(0, 2) // day
	e = a.substring(5, 6)// '/'
	f = a.substring(6, 10) // year
	if (b<1 || b>12) err = 1
	if (d<1 || d>31) err = 1
	if (f<=1800) err = 1
	if (b==4 || b==6 || b==9 || b==11){
		if (d==31) err=1
	}
	if (b==2){
		var g=parseInt(f/4)
		if (isNaN(g)) {
			err=1
		}
		if (d>29) err=1
		if (d==29 && ((f/4)!=parseInt(f/4))) err=1
	}		
	
	if (isNaN(b)||isNaN(d)||isNaN(f))
		 err=1	
	
	if (err==1) {
		alert(thisdate.value + ' is not a valid date. Please re-enter.');		
		thisdate.value = ""
		return bolReturn;
	}	
}


//---------------------------------------------------------------------------------------------------------------
//Description	: Date Object and various of its function.
//Methods		: formatDate(i, delKey, direction), checkDate(THISDATE) 
//Returns		: Arrange the date value and add in "/"
//Examples		: for enrolment
//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------
//Description	: Function for format date to dd/mm/yy
//Parms			: 
//Returns		: None
//Notes			: None
//----------------------------------------------------------------------------------------------------
function formatDate1(i, delKey, direction) 
{
 // if (i.value.length < 10) {
  	if (delKey!=9) { //tab
	  	if(delKey!=46 && delKey!=16 &&  !(delKey>36 && delKey<41)){ //if the delete, backspace, shift, are not the keys that caused the keyup event.
  			var fieldLen = i.value.length
   			if ((delKey >= 48 && delKey <= 57) || (delKey >= 96 && delKey <=105)) {
   				if (fieldLen == 2 || fieldLen == 5) {
      				i.value = i.value + "/";
		     	}
   			} else {
   				if (direction == "up") {
     				if (i.value.length == 0) {
      					i.value = ""
	     			} else {
		      			i.value = i.value.substring(0,i.value.length-1)
	   				}
    			}
	 		}
  			i.focus()
	  	}
 	} else {
 		if (direction == "down") {
	 		checkDate1(i)
  		}
  	}
 //}
}


//----------------------------------------------------------------------------------------------------
//Description	: Function for validate date entered
//Parms			: Date
//Returns		: None
//Notes			: None
//----------------------------------------------------------------------------------------------------
function checkDate1(thisdate) 
{
	var err=0
	var bolReturn=false;
	
	a=thisdate.value
	z = thisdate.value.length;
	//if (a.length != 10) err=1
	
	if (z > 0){
		
		b = a.substring(3, 5) // day
		c = a.substring(2, 3)// '/'
		d = a.substring(0, 2) // month
		e = a.substring(5, 6)// '/'
		f = a.substring(6, 10) // year
		if (b<1 || b>12) err = 1
		if (d<1 || d>31) err = 1
		if (f<=1800) err = 1
		if (b==4 || b==6 || b==9 || b==11){
			if (d==31) err=1
		}
		if (b==2){
			var g=parseInt(f/4)
			if (isNaN(g)) {
				err=1
			}
			if (d>29) err=1
			if (d==29 && ((f/4)!=parseInt(f/4))) err=1
		}				
		
		if (isNaN(b)||isNaN(d)||isNaN(f))
		 err=1	
	
		if (err==1) {
			alert(thisdate.value + ' is not a valid date. Please re-enter.');		
			thisdate.value = ""
			return bolReturn;
		}	
	}
	
}

//---------------------------------------------------------------------------------------------------
//Description	: formatMonthYear  for MM/YY
//Parms		    : i, delKey,direction
//Returns	    :
//Notes		    : None.
//---------------------------------------------------------------------------------------------------
function formatMonthYear(i, delKey,direction) {
  if (i.value.length < 5) {
  	if (delKey!=9) { //tab
	  	if(delKey!=46 && delKey!=16 &&  !(delKey>36 && delKey<41)){ //if the delete, backspace, shift, are not the keys that caused the keyup event.
  			var fieldLen = i.value.length
   			if ((delKey >= 48 && delKey <= 57) || (delKey >= 96 && delKey <=105)) {
   				if (fieldLen == 2 || fieldLen == 5) {
      				i.value = i.value + "/";
		     	}
   			} else {
   				if (direction == "up") {
     				if (i.value.length == 0) {
      					i.value = ""
	     			} else {
		      			i.value = i.value.substring(0,i.value.length-1)
	   				}
    			}
	 		}
  			i.focus()
	  	}
 	} else {
 		if (direction == "down") {
	 		checkMonthYear(i)
  		}
  	}
 }
}

//----------------------------------------------------------------------------------------------------
//Description	: checkMonthYear - Function for validate date entered
//Parms			: Date
//Returns		: None
//Notes			: None
//----------------------------------------------------------------------------------------------------
function checkMonthYear(thisdate) 
{
	var err=0;
	var bolReturn=false;
			
	a=thisdate.value
	if (a.length != 5) err=1
	b = a.substring(0, 2) // month
	c = a.substring(2, 3)// '/'
	d = a.substring(3, 5) // year
	if (b<1 || b>12) err = 1
	if (d<=0000) err = 1
	
	if (isNaN(b)||isNaN(d)||isNaN(d))
		 err=1	
	
	if (err==1) {
		alert(thisdate.value + ' is not a valid date. Please re-enter.');		
		thisdate.value = ""
		return bolReturn;
	}	
}

//---------------------------------------------------------------------------------------------------
//Description	: Format time to 00:00 FormatTime()
//Parms		    : i, delKey,direction
//Returns	    :
//Notes		    : None.
//---------------------------------------------------------------------------------------------------

function formatTime(i, delKey,direction) {
  if (i.value.length < 5) {
  	if (delKey!=9) { //tab
	  	if(delKey!=8 && delKey!=46 && delKey!=16 &&  !(delKey>36 && delKey<41)){ //if the delete, backspace, shift, are not the keys that caused the keyup event.
  			var fieldLen = i.value.length
   			if ((delKey >= 48 && delKey <= 57) || (delKey >= 96 && delKey <=105)) {
   				if (fieldLen == 2 || fieldLen == 5) {
      				i.value = i.value + ":";
		     	}
   			} else {
   				if (direction == "up"||direction==1) {
     				if (i.value.length == 0) {
      					i.value = ""
	     			} else {
		      			i.value = i.value.substring(0,i.value.length-1)
	   				}
    			}
	 		}
  			i.focus()
	  	}
 	} else {
 		if (direction == "down"||direction==0) {
	 		checkTime(i)
  		}
  	}
 }
}

//---------------------------------------------------------------------------------------------------
//Description	: Format time to 00:00 CheckTime()
//Parms		    : THISTIME
//Returns	    :
//Notes		    : None.
//---------------------------------------------------------------------------------------------------

//Validate time entered
function checkTime(thistime) {
	var err=0
	var bolReturn=false;

	a = thistime.value
	if (a.length != 5) err=1
	b1 = a.substring(0,1)// hh
	b2 = a.substring(1,2)
	c = a.substring(2, 3)// ':'
	d1 = a.substring(3,4)// mm
	d2 = a.substring(4,5)
	if (isNaN(parseInt(b1))) err=1
	if (isNaN(parseInt(b2))) err=1
	if (isNaN(parseInt(d1))) err=1
	if (isNaN(parseInt(d2))) err=1
	
	e1 = a.substring(0,2)
	e2 = a.substring(3,5)
	
	if (isNaN(parseInt(e1))) err=1
	else if (e1<0 || e1>23) err=1
	if (isNaN(parseInt(e2))) err=1
	else if (e2<0 || e2>59) err=1
	
	
	
	if (err==1) {
		alert(thistime.value + ' is not a valid time. Please re-enter.');
		thistime.value="";
		thistime.focus();
		return bolReturn;
	}
	
}


//---------------------------------------------------------------------------------------------------
//Description	: Function for check or uncheck all the checkbox
//Parms			: Object (form name, checkbox name, and checked status)
//Returns		: None
//Notes			: None.
//---------------------------------------------------------------------------------------------------
function checkBoxes(form, check, status) 
{

  var chkID = check.id;  
  for (var c = 0; c < form.elements.length; c++)
     if (form.elements[c].id == chkID){
	if (form.elements[c].type == 'checkbox')
	   if (form.elements[c].disabled != true)
		form.elements[c].checked = status;
     }

}

function checkBoxes2(field, status) 
{		
	for (i = 0; i < field.length; i++) {
		if (field[i].disabled != true)
		field[i].checked = status;
	}
}


//----------------------------------------------------------------------------------------------------
//Description	: Function for place focus to the first field on the form
//Parms			: None
//Returns		: None
//Notes			: None
//----------------------------------------------------------------------------------------------------
function placeFocus() 
{
	if (document.forms.length > 0) {
	var field = document.forms[0];
		for (i = 0; i < field.length; i++) {
		if ((field.elements[i].type == "text") || (field.elements[i].type == "textarea") || (field.elements[i].type.toString().charAt(0) == "s")) {
		document.forms[0].elements[i].focus();
		if (document.forms[0].elements[i].type == "text")
			document.forms[0].elements[i].select();
		break;
         }
      }
   }
}


//----------------------------------------------------------------------------------------------------
//Description	: Function for enter act as Tab
//Parms			: field name and event
//Returns		: None
//Notes			: None
//----------------------------------------------------------------------------------------------------
function handleEnter (field, event) 
{
  var keyCode = event.keyCode ? event.keyCode : 
                event.which ? event.which : event.charCode;
  if (keyCode == 13) {
    var i;
    for (i = 0; i < field.form.elements.length; i++)
      if (field == field.form.elements[i])
        break;
    i = (i + 1) % field.form.elements.length;
    field.form.elements[i].focus();
    return false;
  }
  else
    return true;
}

 
//---------------------------------------------------------------------------------------------------
//Description	: Check whether the span is hide or not, if no, set it to hidden.
//Parms			: Span id
//Returns		: None
//Notes			: None
//---------------------------------------------------------------------------------------------------       
function checkSpan(spanid)
{			
	if (str != "")
//	var a = "<%=bolErrorMsg%>";
//	if (a == false)
	{		
		var control = document.getElementById(spanid);						
		hideSpan(control);		
	}
}


//--------------------------------------------------------------------------------------------
//Description	: Open a new maximize window with provided URL.
//Parms			: url - URL string	
//Returns		: None.
//Notes			: None.
//--------------------------------------------------------------------------------------------

function showFullScreen(url)
{

    var w = window.screen.availWidth;
	var h = window.screen.availHeight;

	var win = open(url, "Booking", "'screenX=0,screenY=0,left=0,top=0,width=' + w + ',height=' + h + 'scrollbars=yes,resizable=yes");
	win.moveTo(0, 0);
	win.resizeTo(window.screen.availWidth, window.screen.availHeight);

    
}
	

//--------------------------------------------------------------------------------------------
//Description	: Close window and reload parent window
//Parms			: None
//Returns		: None
//Notes			: None.
//--------------------------------------------------------------------------------------------
function quit()
{
	if (window.opener != null) 
	{
		window.opener.location.reload();
		window.close();  
	}
}


//--------------------------------------------------------------------------------------------
//Description	: Quit from current page and return to previous (calling) page
//Parms			: None
//Return		: None
//Notes			: None.
//--------------------------------------------------------------------------------------------
function back()
{
	history.back();
}		



//---------------------------------------------------------------------------------------------------
//Description	: Logout from the system
//Parms			: strURL - url to be redirect to
//Returns		: None
//Notes			: Use in BBDC admin & internet online to logout of the system
//---------------------------------------------------------------------------------------------------
function logout(strURL)
{	
	if (confirm('Are you sure you want to Logout?') == true) {
		parent.location.replace(strURL);	
	}		  
	
}


//---------------------------------------------------------------------------------------------------
//Description	: Hide radio button dynamically
//Parms			: counter
//Returns		: 
//Notes			: Use in BBDC (maintenance module to dynamically hide course type based on 
//			  selected class type
//---------------------------------------------------------------------------------------------------
function hideAllOption(counter) {
	var spanid;
	for (i = 1; i <= counter; i++){				
		var spanid = document.getElementById('course' + i);
		spanid.style.visibility='hidden';
     	}
     
}


//---------------------------------------------------------------------------------------------------
//Description	: Display radio button dynamically
//Parms			: t = spanid, i = counter for hiding the option
//Returns		: 
//Notes			: Use in BBDC (maintenance module to dynamically display course type based on 
//			  selected class type
//---------------------------------------------------------------------------------------------------
function displayOption(t, i) {
	hideAllOption(i);
	var spanid = document.getElementById(t);
	var titleid = document.getElementById('title');
	titleid.style.visibility='visible';
	spanid.style.visibility='visible';
}


//---------------------------------------------------------------------------------------------------
//Description	: Validate the form element of checkbox, radio button & combo box
//Parms			: form - form object
//Returns		: None
//Notes			: Use in BBDC (maintenance module to validate and alert)
//---------------------------------------------------------------------------------------------------
function validateForm (form) {
  for (var e = 0; e < form.elements.length; e++) {
    var el = form.elements[e];
    if (el.type.indexOf('select') != -1) {
      if (el.selectedIndex == -1) {
        alert('Please select a value of the select field ' + el.name);
        el.focus();
        return false;
      }
    }
    else if (el.type == 'radio') {
      var group = form[el.name];
      var checked = false;
      if (!group.length)
        checked = el.checked;
      else
        for (var r = 0; r < group.length; r++)
          if ((checked = group[r].checked))
            break;
      if (!checked) {
        alert('Please check one of the class type or course type.');
        el.focus();
        return false;
      }
    }
    else if (el.type == 'checkbox') {
      var group = form[el.name];
      if (group.length) {
        var checked = false;
        for (var r = 0; r < group.length; r++)
          if ((checked = group[r].checked))
			break;
        if (!checked) {
          alert('Please check one of the checkboxes');
          el.focus();
          return false;
        }
      }
    }
  }
  return true;
}

//---------------------------------------------------------------------------------------------------
//Description	: Validate the form element of radio button
//Parms			: form - form object
//Returns		: None
//Notes			: Use in BBDC (maintenance module to validate and alert)
//---------------------------------------------------------------------------------------------------
function validateRadio (form) {
  for (var e = 0; e < form.elements.length; e++) {
    var el = form.elements[e];
    if (el.type == 'radio') {
      var group = form[el.name];
      var checked = false;
      if (!group.length)
        checked = el.checked;
      else
        for (var r = 0; r < group.length; r++)
          if ((checked = group[r].checked))
            break;
      if (!checked) {
        alert('Please select one of the option.');
        el.focus();
        return false;
      }
    }    
  }
  return true;
}


//---------------------------------------------------------------------------------------------------
//Description	: Side navigation for Collapse All Module
//Parms			: None
//Returns		: None
//Notes			: None
//---------------------------------------------------------------------------------------------------
function collapseBlurbs() {
	var eElem, aDivs = document.all.tags("DIV");
	var iDivsLength = aDivs.length;
	for(i=0; i<iDivsLength; i++) {
		eElem = aDivs[i];
		if (eElem.id.indexOf('FAQ') != -1) eElem.style.display = "none";
	}
 
}


//---------------------------------------------------------------------------------------------------
//Description	: Side navigation for Expand All Module
//Parms			: None
//Returns		: None
//Notes			: None
//---------------------------------------------------------------------------------------------------
function expandBlurbs() {
	var eElem, aDivs = document.all.tags("DIV");
	var iDivsLength = aDivs.length;
	for(i=0; i<iDivsLength; i++) {
		eDiv = aDivs[i];
		if (eDiv.id.indexOf('FAQ') != -1) eDiv.style.display = "";
	}
	
  
 
}
 
//---------------------------------------------------------------------------------------------------
//Description	: Once a link is selected, the visitor is automatically taken to the site
//				  without hitting 'Go!' or anything
//Parms			: form object
//Returns		: None
//Notes			: Use in pulldown menu of BBDC maintenance
//---------------------------------------------------------------------------------------------------

function formHandler(form){
	var URL = document.form.site.options[document.form.site.selectedIndex].value;
	window.location.href = URL;
}


//---------------------------------------------------------------------------------------------------
//Description	: To limit and show the maximum characters that can be entered into textarea
//Parms			: None
//Returns		: None
//Notes			: Use in textarea
//---------------------------------------------------------------------------------------------------
function textCounter(field, countfield, maxlimit) {
	if (field.value.length > maxlimit)
		field.value = field.value.substring(0, maxlimit);
	else 
		countfield.value = maxlimit - field.value.length;
}


//---------------------------------------------------------------------------------------------------
//Description	: To check start time < end time
//Parms			: None
//Returns		: None
//Notes			: Use in textarea
//---------------------------------------------------------------------------------------------------

function timeChecker(Elm)
{
	idno = Elm.id;
	left = idno%2;
	
	if (left==0)
	{
		var nm, nm2;
		nm2 = document.getElementById(Elm.id);
		b = Number(idno)-1;
		nm = document.getElementById(b);
		
		fValue = nm.value;
		
		F0Value = fValue.substr(0,2);
		F1Value = fValue.substr(3,2);
			
		sValue = nm2.value;
		S0Value = sValue.substr(0,2);
		S1Value = sValue.substr(3,2);
	
		if (nm.value!="")
		{
			if (S0Value==F0Value)
			{	
				if (S1Value<=F1Value)
				{	
					alert("End Time must be greater than Start Time");
					nm2.value = "";
				}	
			}
			else if (S0Value>F0Value)
			{	
//				if (S1Value<F1Value)
//				{
//					alert("End Time must be greater than Start Time");
//					nm2.value = "";
//				}	
			}
			else
			{	
				alert("End Time must be greater than Start Time");
				nm2.value = "";
			}	
		}	
	}
	
	if (left!=0)
	{
		var nm, nm2, 
		nm = document.getElementById(Elm.id);
		b = Number(idno)+1;
		nm2 = document.getElementById(b);
	
		fValue = nm.value;
		F0Value = fValue.substr(0,2);
		F1Value = fValue.substr(3,2);
			
		sValue = nm2.value;
		S0Value = sValue.substr(0,2);
		S1Value = sValue.substr(3,2);
		
		if (nm2.value!="")
		{	
			if (S0Value==F0Value)
			{	
				if (S1Value<=F1Value)
				{
					alert("Start Time must be smaller than End Time");
					nm.value = "";
				}	
			}
			else if (S0Value>F0Value)
			{	
//				if (S1Value<F1Value)
//				{
//					alert("Start Time must be smaller than End Time");
//					nm.value = "";
//				}	
			}
			else
			{	
				alert("Start Time must be smaller than End Time");
				nm.value = "";
			}	
		}	
	}	
}


//---------------------------------------------------------------------------------------------------
//Description	: To check start day < end day
//Parms			: None
//Returns		: None
//Notes			: Use in textbox
//---------------------------------------------------------------------------------------------------

function dayChecker(Elm)
{
	idno = Elm.id;
	left = idno%2;
	
	if (left==0)
	{
		var nm, nm2;
		nm2 = document.getElementById(Elm.id);
		b = Number(idno)-1;
		nm = document.getElementById(b);
		
		fValue = nm.value;		
		sValue = nm2.value;
		sValue = parseInt(sValue)
		fValue = parseInt(fValue)
		
		if (sValue < fValue)
		{
			alert("End day must be greater than Start day");
			nm2.value = "";
		}			
	}
	if (left!=0)
	{
		var nm, nm2;
		nm = document.getElementById(Elm.id);
		b = Number(idno)+1;
		nm2 = document.getElementById(b);
		
		fValue = nm.value;		
		sValue = nm2.value;
		sValue = parseInt(sValue)
		fValue = parseInt(fValue)
		
		if (fValue > sValue)
		{
			alert("Start day must be smaller than End day");
			nm.value = "";
		}
	}
}


//---------------------------------------------------------------------------------------------------
//Description	: Pop up new screen based on URL given
//Parms			: None
//Returns		: None
//Notes			: Use in Slot Releasing
//---------------------------------------------------------------------------------------------------
function popup(popupURL)
{
	var popup = window.open(popupURL,'win','toolbar=0,location=0,directories=0,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=200,height=320,top=100,left=200').focus();
}



//----------------------------------------------------------------------------------------------------
//Description	: Check length for max length.
//Parms			: None
//Returns		: None
//Notes			: Use in Cashier - Top Up.
//----------------------------------------------------------------------------------------------------
//function checkLength(obj, length)
function checkLength(obj)
{	
	//if (length == obj.size)
	if (obj.value.length == obj.size)
		return true;
	
	return false;
}

//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on cancelling booking
//				: For cancellation of Theory Test
//Parms			: None
//Returns		: None
//Notes			: Use in textbox
//---------------------------------------------------------------------------------------------------
function confirmCancelBooking() {
    var blnResult = false;			
    var checked = false;
    
    blnResult = hasCheckABox(document.forms[0].name, '', 'Please select a slot before submiting' );
	
  if (blnResult)
  {					
		//if ( confirm('Please note that there will be NO REFUND of Test Fee for cancellationof test date.\n\n\nPlease click OK to proceed with any of the following transaction \n(i)\tTry Sell\n(ii)\tCancel\n(iii)\tTake back Try Sell\n\nOr CANCEL to abort transaction.')==true) {
			
			if ( confirm('Please note that there will be NO REFUND of Test Fee for cancellation of test date.\n\n\nPlease click OK to proceed or CANCEL to abort transaction.')==true) {
			return true;
		}	
  }   
   return false;
}

//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on cancelling booking including Try Sell
//				: For cancellation of Practical Lesson, Theory Lesson and Theory Practice / Evaluation
//Parms			: None
//Returns		: None
//Notes			: Use in textbox
//---------------------------------------------------------------------------------------------------
function confirmCancelBookingTrySell() {
    var blnResult = false;			
    var checked = false;
    
    blnResult = hasCheckABox(document.forms[0], '', 'Please select a slot before submiting' );
	
  if (blnResult)
  {						
		if ( confirm('Please click OK to proceed with any of the following transactions \n(i)\tTry Sell\n(ii)\tCancel\n(iii)\tTake back Try Sell\n\nOr CANCEL to abort transaction.')==true) {
			return true;
		}	
  }   
   return false;
}

//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on cancelling booking
//Parms			: None
//Returns		: None
//Notes			: Use in textbox
//---------------------------------------------------------------------------------------------------
function confirmTakeBackBooking() {
    var blnResult = false;			
    var checked = false;
    
    blnResult = hasCheckABox(document.forms[0], '', 'Please select a slot before submiting' );
	
  if (blnResult)
  {					
		if ( confirm('Are you sure to take back the selected bookings or placed under?')==true) {
			return true;
		}	
  }   
   
   return false;
}

function hasCheckABox(form, radioMsg, checkMsg) {
var a=false;
  	
  for (var e = 0; e < form.elements.length; e++) {
    var el = form.elements[e];        
    if (el.type == 'checkbox') {	
      var group = form[el.name];

      if (group.length==null) {     
         if (group.checked) {
           a=true;
         }         
      }
      
      if (group.length>0) {
        var checked = false;
        for (var r = 0; r < group.length; r++) {
          if ((checked = group[r].checked)) {
            a=true;
		  }
	    }
      }
    }
  }//for loop
  
	    if (!a) {
          alert(checkMsg);
          el.focus();
          return false;
        }
  
  return true;    
}

//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on cancelling test booking
//Parms			: None
//Returns		: None
//Notes			: Use in theory evaluation, test, and practical test page.
//---------------------------------------------------------------------------------------------------
function confirmTestCancelBooking() {
 
 var cancelType = document.forms[0].canceltype.value;
 var msg ='';
 
 if (cancelType == 'T')
	 msg = 'Please note that there will be NO REFUND of Test Fee, Vehicle Rental Fee and Warm up Fee for cancellation of test date.\n\nAre you sure you want to try-sell your slot ?';
 else if (cancelType == 'C')
	 msg = 'Please note that there will be NO REFUND of Test Fee, Vehicle Rental Fee and Warm up Fee for cancellation of test date.\n\nAre you sure you want to cancel your slot ?';
 else if (cancelType == 'A')
	 msg = 'Please note that there will be NO REFUND of Test Fee, Vehicle Rental Fee and Warm up Fee for cancellation of test date.\n\nAre you sure you want to take back your try-sell slot ?';
 
 if ( confirm(msg)==true) {
		return true;
 }	
   
   return false;
}

//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on cancelling test booking
//Parms			: None
//Returns		: None
//Notes			: Use in theory evaluation, test, and practical test page.
//---------------------------------------------------------------------------------------------------
function confirmTestCancelBookingP() {
 
 var cancelType = document.forms[0].canceltype.value;
 var msg ='';
 
 if (cancelType == 'T')
	 msg = 'Please note that there will be NO REFUND of Test Fee for cancellation of test date.\n\nAre you sure you want to try-sell your slot ?';
 else if (cancelType == 'C')
	 msg = 'Please note that there will be NO REFUND of Test Fee for cancellation of test date.\n\nAre you sure you want to cancel your slot ?';
 else if (cancelType == 'A')
	 msg = 'Please note that there will be NO REFUND of Test Fee for cancellation of test date.\n\nAre you sure you want to take back your try-sell slot ?';
 
 if ( confirm(msg)==true) {
		return true;
 }	
   
   return false;
}

//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on cancelling test booking
//Parms			: None
//Returns		: None
//Notes			: Use in theory evaluation, test, and practical test page.
//---------------------------------------------------------------------------------------------------
function confirmTestCancelBooking2() {
 
 var cancelType = document.forms[0].canceltype.value;
 var msg ='';
 
 if (cancelType == 'T')
	 msg = 'Please note that there will be NO REFUND of Test Fee and Vehicle Rental Fee for cancellation of test date.\n\nAre you sure you want to try-sell your slot ?';
 else if (cancelType == 'C')
	 msg = 'Please note that there will be NO REFUND of Test Fee and Vehicle Rental Fee for cancellation of test date.\n\nAre you sure you want to cancel your slot ?';
 else if (cancelType == 'A')
	 msg = 'Please note that there will be NO REFUND of Test Fee and Vehicle Rental Fee for cancellation of test date.\n\nAre you sure you want to take back your try-sell slot ?';
 
 if ( confirm(msg)==true) {
		return true;
 }	
   
   return false;
}



//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on Deletion
//Parms			: None
//Returns		: None
//Notes			: Use in Motorcycle Practical Lesson Update Maintenance page.
//				  Required checkSpan() on Delete.
//---------------------------------------------------------------------------------------------------
function confirmSubmit(templName) {

	if (event.srcElement.value.toLowerCase() == "delete")
	{
		if (!confirm("Are you sure you want to delete the current template?"))
			return;
		else
			checkSpan('TblSpan2');
	}

	form1.method="post";
	form1.action="a-2w-monthlySlotMaintenanceUpdate1108.html?cboTemplateName=" + templName;
	form1.submit();
}

//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on Deletion
//Parms			: None
//Returns		: None
//Notes			: Use in Practical test Update Maintenance page.
//---------------------------------------------------------------------------------------------------
function confirmSubmitPT(templName) {

	if (event.srcElement.value.toLowerCase() == "delete")
	{
		if (!confirm("Are you sure you want to delete the current template?"))
			return;
	}
		
	formPT.method="post";
	formPT.action="a-pt-maintenanceUpdate600e.html?txtTemplateName=" + templName;
	formPT.submit();
}

//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on Deletion
//Parms			: None
//Returns		: None
//Notes			: Use in PDI Update Maintenance page.
//				  Required checkSpan() on Submit.
//---------------------------------------------------------------------------------------------------
function confirmSubmitPDI(templName, aspName) {

	if (event.srcElement.value.toLowerCase() == "delete")
	{
		if (!confirm("Entire Template will be deleted. Are you sure you want to delete the current template?"))
			return;
	}
	else
		checkSpan('TblSpan2');
	
	form1.method="post";
	form1.action=aspName + "?cboTemplateName=" + templName;
	form1.submit();
}

//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on Deletion
//Parms			: None
//Returns		: None
//Notes			: Use in Theory Lesson Update Maintenance page.
//---------------------------------------------------------------------------------------------------
function confirmSubmitTL(templName, strEnter, aspName) {

	if (event.srcElement.value.toLowerCase() == "delete")
	{
		if (!confirm("Are you sure you want to delete the current template?"))
			return;
	}
	
	form1.method="post";
	form1.action=aspName + "?TemplateName=" + templName + "&bolFirstEnter=" + strEnter;
	form1.submit();
}

//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on Deletion
//Parms			: None
//Returns		: None
//Notes			: Use in Theory Test Update Maintenance page.
//---------------------------------------------------------------------------------------------------
function confirmSubmitTT(templName, aspName) {

	if (event.srcElement.value.toLowerCase() == "delete")
	{
		if (!confirm("Are you sure you want to delete the current template?"))
			return;
	}
	
	form1.method="post";
	form1.action=aspName + "?TemplateName=" + templName;
	form1.submit();
}

//---------------------------------------------------------------------------------------------------
//Description	: Use this function to trim an input string in JavaScript
//Parms		: inputString
//Returns	: trim(inputString);
//Notes		: Use in any page.
//---------------------------------------------------------------------------------------------------
function trim(inputString) {
   // Removes leading and trailing spaces from the passed string. Also removes
   // consecutive spaces and replaces it with one space. If something besides
   // a string is passed in (null, custom object, etc.) then return the input.
   if (typeof inputString != "string") { return inputString; }
   var retValue = inputString;
   var ch = retValue.substring(0, 1);
   while (ch == " ") { // Check for spaces at the beginning of the string
      retValue = retValue.substring(1, retValue.length);
      ch = retValue.substring(0, 1);
   }
   ch = retValue.substring(retValue.length-1, retValue.length);
   while (ch == " ") { // Check for spaces at the end of the string
      retValue = retValue.substring(0, retValue.length-1);
      ch = retValue.substring(retValue.length-1, retValue.length);
   }
   while (retValue.indexOf("  ") != -1) { // Note that there are two spaces in the string - look for multiple spaces within the string
      retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ")+1, retValue.length); // Again, there are two spaces in each of the strings
   }
   return retValue; // Return the trimmed string back to the user
} // Ends the "trim" function	


//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on cancelling Evaluation booking including Try Sell
//Parms			: None
//Returns		: None
//Notes			: Use in textbox
//---------------------------------------------------------------------------------------------------
function confirmEvalCancelBookingTrySell() {
 var cancelType = document.forms[0].canceltype.value;
 var msg ='';
 
 if (cancelType == 'T')
	 msg = 'Please click OK to proceed with any of the following transactions \n(i)\tTry Sell\n(ii)\tCancel\n(iii)\tTake back Try Sell\n\nOr CANCEL to abort transaction.';
 else if (cancelType == 'C')
	 msg = 'Please click OK to proceed with any of the following transactions \n(i)\tTry Sell\n(ii)\tCancel\n(iii)\tTake back Try Sell\n\nOr CANCEL to abort transaction.';
 else if (cancelType == 'A')
	 msg = 'Please click OK to proceed with any of the following transactions \n(i)\tTry Sell\n(ii)\tCancel\n(iii)\tTake back Try Sell\n\nOr CANCEL to abort transaction.';
 
 if ( confirm(msg)==true) {
		return true;
 }	
   
   return false;
}



//---------------------------------------------------------------------------------------------------
//Description	: To display a dialog box asking for confirmation on Deletion
//Parms			: None
//Returns		: None
//Notes			: Use in AT Update Maintenance page.
//				  Required checkSpan() on Submit.
//---------------------------------------------------------------------------------------------------
function confirmSubmitAT(templName, aspName) {

	if (event.srcElement.value.toLowerCase() == "delete")
	{
		if (!confirm("Are you sure you want to delete the current template?"))
			return;
	}
	else
		checkSpan('TblSpan2');
	
	form1.method="post";
	form1.action=aspName + "?cboTemplateName=" + templName;
	form1.submit();
}



function handleEntered (field, event) 
{
  var keyCode = event.keyCode ? event.keyCode : 
                event.which ? event.which : event.charCode;
  if (keyCode == 13) {
    var i;
    for (i = 0; i < field.form.elements.length; i++)
      if (field == field.form.elements[i])
        break;
    i = (i + 1) % field.form.elements.length;
     if(field.form.elements[i].disabled!=true) 
	{
	field.form.elements[i].focus();
	return false;
	}
     else
	{
	return false;
	}
  }
  else
    return true;
}




//---------------------------------------------------------------------------------------------------
//Description	: To return .3 as 0.30 and remove "," "$" from the currency is greater than 1000
//Parms			: None
//Returns		: 
//Notes			: 			
//---------------------------------------------------------------------------------------------------
function formatCurrency2(num) {
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num))
	num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	cents = num%100;
	num = Math.floor(num/100).toString();
	if(cents<10)
	cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	num = num.substring(0,num.length-(4*i+3))+','+
	num.substring(num.length-(4*i+3));
	
	// remove $ and , 
	num = num.toString().replace(/\$|\,/g,'');
	//
	
	newamt = ((sign)?'':'-') + num + '.' + cents;
	
	if (newamt == "0.00")
	    newamt = "";
	
	//return (((sign)?'':'-') + num + '.' + cents);
	return(newamt);
	
}

//---------------------------------------------------------------------------------------------------
//Description	        : 
//Parms			:inputString, fromString,toString
//Returns		: 
//Notes			: 			
//---------------------------------------------------------------------------------------------------
function replaceSubstring(inputString, fromString, toString) {
   // Goes through the inputString and replaces every occurrence of fromString with toString
   var temp = inputString;
   if (fromString == "") {
      return inputString;
   }
   if (toString.indexOf(fromString) == -1) { // If the string being replaced is not a part of the replacement string (normal situation)
      while (temp.indexOf(fromString) != -1) {
         var toTheLeft = temp.substring(0, temp.indexOf(fromString));
         var toTheRight = temp.substring(temp.indexOf(fromString)+fromString.length, temp.length);
         temp = toTheLeft + toString + toTheRight;
      }
   } else { // String being replaced is part of replacement string (like "+" being replaced with "++") - prevent an infinite loop
      var midStrings = new Array("~", "`", "_", "^", "#");
      var midStringLen = 1;
      var midString = "";
      // Find a string that doesn't exist in the inputString to be used
      // as an "inbetween" string
      while (midString == "") {
         for (var i=0; i < midStrings.length; i++) {
            var tempMidString = "";
            for (var j=0; j < midStringLen; j++) { tempMidString += midStrings[i]; }
            if (fromString.indexOf(tempMidString) == -1) {
               midString = tempMidString;
               i = midStrings.length + 1;
            }
         }
      } // Keep on going until we build an "inbetween" string that doesn't exist
      // Now go through and do two replaces - first, replace the "fromString" with the "inbetween" string
      while (temp.indexOf(fromString) != -1) {
         var toTheLeft = temp.substring(0, temp.indexOf(fromString));
         var toTheRight = temp.substring(temp.indexOf(fromString)+fromString.length, temp.length);
         temp = toTheLeft + midString + toTheRight;
      }
      // Next, replace the "inbetween" string with the "toString"
      while (temp.indexOf(midString) != -1) {
         var toTheLeft = temp.substring(0, temp.indexOf(midString));
         var toTheRight = temp.substring(temp.indexOf(midString)+midString.length, temp.length);
         temp = toTheLeft + toString + toTheRight;
      }
   } // Ends the check to see if the string being replaced is part of the replacement string or not
   return temp; // Send the updated string back to the user
} // Ends the "replaceSubstring" function


//---------------------------------------------------------------------------------------------------
//Description	: function to verify the from date is less than to date
//Parms			: inputString, fromString,toString
//Returns		: 
//Notes			: 			
//---------------------------------------------------------------------------------------------------

function ValidateFromToDate(date1,date2)
{//date format is dd/mm/yyyy;
var text1,text2;
var d1,m1,y1;
var d2,m2,y2;
//text1=date1.value;
text1=date1;
//text2=date2.value;
text2=date2;

if ((date1 == "") && (date2 != "")) 
{
 return false;
}

if ((date1 != "") && (date2 == "")) 
{
 return false;
}


d1=text1.substring(0,2);
m1=text1.substring(3,5);
y1=text1.substring(6,10);

d2=text2.substring(0,2);
m2=text2.substring(3,5)
y2=text2.substring(6,10);

if (y1 > y2)
	{
	return false;
	}
else if ((y1==y2) && (m1>m2))
	{
	return false;
	}
else if((y1==y2) && (m1==m2) && (d1>d2))
	{
	return false;
	}
	/*
else if((y1==y2) && (m1==m2) && (d1=d2))
	{
	return false;
	}*/
else
	{
		return true;
	}
}    


//---------------------------------------------------------------------------------------------------
//Description	: function to check all checkboxes with same id 
//Parms			: 
//Returns		: 
//Notes			: 			
//---------------------------------------------------------------------------------------------------

function checkAll(tobjid, objid) {
// tick all rows 
	var i, len, chk, allobj, rowID,j;

    // header row
    tr=document.all(tobjid);
    tr.checked = true;
    
    // rows
	allobj=document.all[objid];

	//if there is a form in the page, perform below checking
	 len = allobj.length;	
	 	 
	// if there is only one checkbox
	if (len==undefined) {
	 allobj.checked = true;	 
	} 	 
	 	 
	for (i=0; i < len; i++ )
    {	
      allobj[i].checked = true;
      j = i + 1;
    
	} 
}

//---------------------------------------------------------------------------------------------------
//Description	: function to uncheck all checkboxes of same id  
//Parms			: 
//Returns		: 
//Notes			: 			
//---------------------------------------------------------------------------------------------------

function uncheckAll(tobjid, objid) {
// untick row
	var i, len, chk, allobj,rowID,j;	


    // header row
    tr=document.all(tobjid);
    tr.checked = false;
    
    // rows
    allobj=document.all[objid];
	//if there is a form in the page, perform below checking
	len = allobj.length;	
	 	 
	// if there is only one checkbox
	if (len==undefined) {
     //alert("allobj.value="+allobj.value+":"+allobj.checked);
	 //alert("allobj.length="+allobj.length);
	 //  if (allobj.checked == true)
	 //    chk = false;	 	 
	 
	 allobj.checked = false;
	 
	} 	 
	 	 
	for (i=0; i < len; i++ )
    {	
     allobj[i].checked = false;
     j = i + 1;
	 
	} 
	
}

//---------------------------------------------------------------------------------------------------
//Description	: function to check all check boxes of same id are ticked
//Parms			: 
//Returns		: 
//Notes			: 			
//---------------------------------------------------------------------------------------------------

function allTickCheckBox(tobjid,objid)
{
  var tr, allTick;
  
  tr=document.all(tobjid);
  allobj=document.all[objid];

  allTick = true;
  
  if (allobj!=undefined)
  {
  len = allobj.length;		 	 
	
	// if there is only one checkbox
	if (len==undefined) 
	  if (allobj.checked == false) allTick = false; 
	 
	for (i=0; i < len; i++ )	
     if  (allobj[i].checked==false) allTick = false;
	
	if (allTick) 
	  tr.checked = true;
	else
	  tr.checked = false;
  }
}

//---------------------------------------------------------------------------------------------------
//Description	: function to tick or untick all checkboxes.
//Parms			: 
//Returns		: 
//Notes			: 			
//---------------------------------------------------------------------------------------------------

function toggleCheckBox(tobjid,objid)
{
  var tr;
  
  tr=document.all(tobjid);
  
  if (tr.checked)
    checkAll(tobjid,objid);
  else
    uncheckAll(tobjid,objid); 

}


//------------------------------------Submit Once added on (23-11-2005)--------------------

function SubmitOnce(theform)
{
	
	if (document.all||document.getElementById)
	{
		
		
		for (i=0;i<theform.length;i++)
		{
			
			var tempobj=theform.elements[i]
				
			if(tempobj.type.toLowerCase()=="submit")
			{
				
				tempobj.disabled=true;
				return true;
			}
			
		}
	}
}


//-------------------------------------------------------------------------
function checkvenue(v1,v2,v3)
{
//var v1,
//var v2;
//,v3;
//var v3
//var i;


//v1=v1;


//for (i=0;i<obj.optVenue.length;i++){
// if (obj.optVenue[i].checked==true)
// {
//   v2=obj.optVenue[i].value;
//   v3=obj.optVenue[i].name;
//   break;
// }
//}

//alert(v1);
//alert(v2);



  if (v1!=v2){ 
    window.alert("You have chosen a different venue.\n\n Please proceed to " + v3 +" for your training.");
   }
}

 