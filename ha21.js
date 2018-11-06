let s = "";
    while(s.length<8){
        if(s.length<1){
           s+="#" 
        }
        console.log(s);
	    s+="#"
    }
let n=1;
while(n<=100){
    if(n%3==0 && n%5==0)
        console.log("FizzBuzz")
    else if(n%3==0){
        console.log("Fizz");
    }
    else if(n%5==0){
        console.log("Buzz");
    }
    else{
        console.log(n)
    }
    n++;

}
let size=8;
let string = " ";
for(let m=0;m<size;m++){
    for(let n=0;n<size;n++){
        if((m+n)%2==0)
            string+=" ";
            
        else{
            string+="#";
        }
        
    }
    string+="\n";
}
console.log(string);

let gridSize=8;
let board = "";
for(let m=0;m<size;m++){
    for(let n=0;n<size;n++){
        let s= "("+m+","+n+")";
        board+=s
        
    }
    board+="\n";
}
console.log(board);
