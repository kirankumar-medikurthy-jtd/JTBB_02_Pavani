let str="amma speak malayalam fluently";
let start=0;
let end=0;
while(start  < str.length){
    while(start < str.length  && str[start]!=" "){
        start++;
    }
    let word="";
    let temp="";
    for(let i=end;i<start;i++){
        word+=str[i];
    }
    temp = word;
    reverseword(word,temp);
    //console.log(word);
    start=start+1;
    end=start;
}
function reverseword(word,original){
    let array = word.trim().split("");
    let start=0;
    let end= word.length-1;
    while(start < end){
        let temp=array[start];
        array[start]=array[end];
        array[end]=temp;
        start++;
        end--;
    }
    if(word.length%2!==0   &&  array.join("") === original){
        console.log(original);
    }
}
