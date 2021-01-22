//PROBLEMA3
function palindromeRearranging(s){
    var x = [26];
    for(var i=0;i<26;i++){
      x[i]=0;
    }
    for(var i=0;i<s.length;++i){
      x[s.charCodeAt(i)-97]++;
    }
    var cnt=0;
    for(var i=0;i<26;++i){
      if(x[i]%2)++cnt;
    }
    if(cnt > 1){
      return false;
    }
      return true;
    }
    var r1="mmaarriiaa";
    var r2="mmariaa";
    console.log((palindromeRearranging(r1) ? "true" : "false"));
    console.log((palindromeRearranging(r2) ? "true" : "false"));