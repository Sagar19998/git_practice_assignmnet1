let count=0;
num=13;
for(let i=0;i<=num;i++){
	if(num%i==0){
		count++;
	}
}
if(count==0){
	console.log("prime");
}
else{
	console.log("Not prime")
}