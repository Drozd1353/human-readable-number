module.exports = function toReadable (number) {
    let n=number;
    let str='';
    n=n.toString();
     function check(number)
     {
         if(number==1)
         {
             return "one";
         }
         if(number==2)
         {
             return "two";
         }
         if(number==3)
         {
             return "three"
         }
         if(number==4)
         {
             return "four";
         }
         if(number==5)
         {
             return "five";
         }
         if(number==6)
         {
             return "six";
         }
         if(number==7)
         {
             return "seven"
         }
         if(number==8)
         {
             return "eight"
         }
         if(number==9)
         {
             return "nine"
         }
         if(number==10)
         {
             return "ten";
         }
         if(number==11)
         {
             return "eleven";
         }
         if(number==12)
         {
             return "twelve";
         }
         if(number==13)
         {
             return "thirteen";
         }
         if(number==14)
         {
             return "fourteen";
         }
         if(number==15)
         {
             return "fifteen";
         }
         if(number==16)
         {
             return "sixteen";
         }
         if(number==17)
         {
             return "seventeen";
         }
         if(number==18)
         {
             return "eighteen";
         }
         if(number==19)
         {
             return "nineteen";
         }
     }
     function dozenes(numb)
     {
      if(numb=="2")
         {
             return "twenty";
         }
          if(numb=="3")
         {
             return "thirty";
         }
          if(numb=="4")
         {
             return "forty";
         }
          if(numb=="5")
         {
             return "fifty";
         }
          if(numb=="6")
         {
             return "sixty";
         }
          if(numb=="7")
         {
             return "seventy";
         }
          if(numb=="8")
         {
             return "eighty";
         }
          if(numb=="9")
         {
             return "ninety";
         }
     }
     if(n.length>=3)
     {
     str=check(+n[0])+' hundred';
     if(n[1]=='0' && n[2]=='0')
     {
         return str;
     }
     if(+n[1]>1)
    {
    str=str +' '+dozenes(n[1]);
   if(n[2]!='0')
    {
    str=str + ' '+check(+n[2]);
    }
    }
    else {
    str=str+' '+check(+n[1]+n[2]);
    }
     }
     else{
     if(n.length<3 && n.length>1)
     {
     if(+n[0]>1)
     {
     str+=dozenes(n[0]);
     if(n[1]!='0')
    {
        str+=' ';
    str+=check(+n[1]);
    }
    }
     else
     {
     str+=check(+n[0]+n[1]);
     }
     }
     }
     if(n.length<2)
     {
         if(n[0]=='0')
         {
             return 'zero';
         }
     str+=check(+n[0]);
     }
     return str;
     }