module.exports = function (text){

  var transl = {};
      transl['а']='a';
      transl['б']='b';
      transl['в']='v';
      transl['г']='g';
      transl['д']='d';
      transl['е']='e';
      transl['ё']='yo';
      transl['ж']='zh';
      transl['з']='z';
      transl['и']='i';
      transl['й']='y';
      transl['к']='k';
      transl['л']='l';
      transl['м']='m';
      transl['н']='n';
      transl['о']='o';
      transl['п']='p';
      transl['р']='r';
      transl['с']='s';
      transl['т']='t';
      transl['у']='u';
      transl['ф']='f';
      transl['х']='x';
      transl['ц']='c';
      transl['ч']='ch';
      transl['ш']='sh';
      transl['щ']='shh';
      transl['ъ']='"';
      transl['ы']='y';
      transl['ь']='';
      transl['э']='e';
      transl['ю']='yu';
      transl['я']='ya';
      transl[' ']='_';
  
  
      var result = '';

      if (text[0] == 'е'){
        result += 'ye'
        for(i=1;i<text.length;i++) {
          if(transl[text[i]] != undefined) { result += transl[text[i]]; }}
      }
      else{
        for(i=0;i<text.length;i++) {
          if(transl[text[i]] != undefined) { result += transl[text[i]]; }
          else { result += text[i]; }
        }
      }

      //console.log(result)
      return result
}
//send('челябинск')