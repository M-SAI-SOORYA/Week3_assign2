
function clickit(){
    
    if (document.querySelector(".inText").value.length==0){
        alert("No input\nPLease enter the number");
    }
    if (document.querySelector(".inText").value>999 || document.querySelector(".inText").value<0){
        document.querySelector(".oput").setAttribute("value","out of range");
    }
    else{

        var note=document.querySelector(".inText").value;
        var inputt=note;
        var flag=0;
        var s='';
        inputt=Math.floor(inputt);
        ones=inputt%10;
        inputt=inputt/10;
        inputt=Math.floor(inputt);
        tens=inputt%10;
        inputt=inputt/10;
        inputt=Math.floor(inputt);
        hundreds=inputt%10;
        if (hundreds===9){
            s+="Nine hundred";
        }
        else if(hundreds===8){
            s+="Eight hundred";
        }
        else if(hundreds===7){
            s+="seven hundred";
        }else if(hundreds===6){
            s+="six hundred";
        }else if(hundreds===5){
            s+="five hundred";
        }else if(hundreds===4){
            s+="four hundred";
        }else if(hundreds===3){
            s+="three hundred";
        }else if(hundreds===2){
            s+="two hundred";
        }else if(hundreds===1){
            s+="one hundred";
        }

        if(tens===1){
            flag=1;

            if (ones===1){
                s+=' eleven';
            }
            else if(ones==0){
                s+=' ten';
            }
            else if(ones===2){
                s+=" twelve"
            }
            else if(ones==3){
                s+=" thirteen";
            }
            else if(ones===4){
                s+=" fourteen";
            }
            else if(ones===5){
                s+=" fifteen";
            }
            else if(ones===6){
                s+=" sixteen";
            }
            else if(ones===7){
                s+=" seventeen";
            }
            else if(ones===8){
                s+=" eighteen";
            }
            else if(ones===9){
                s+=" nineteen";
            }
            

        }
        else if(tens===2){
            s+=" twenty";

        }
        else if(tens===3){
            s+=" thirty";

        }
        else if(tens===4){
            s+=" fourty";

        }
        else if(tens===5){
            s+=" fifty";

        }
        else if(tens===6){
            s+=" sixty";

        }
        else if(tens===7){
            s+=" seventy";

        }
        else if(tens===8){
            s+=" eighty";

        }
        else if(tens===9){
            s+=" ninty";


        }

        if (flag===0){
            
            if (ones===1){
                s+=" one";
            }
        
            else if(ones===2){
                s+=' two';
            }
            else if(ones===3){
                s+=' three';
            }

            else if(ones===4){
                s+=' four';
            }
            else if(ones===5){
                s+=' five';
            }
            else if(ones===6){
                s+=' six';
            }
            else if(ones===7){
                s+=' seven';
            }
            else if(ones===8){
                s+=' eight';
            }
            else if(ones===9){
                s+=' nine';
            }
        }

        if (note==0){
            s+=' zero';
        }




        document.querySelector(".oput").setAttribute("value",s);
        
    }
}
