function stringChop(str, size) {
  // your code here
	if(!str) return []
	const ans=[]
	let chunk="";
	str.split('').forEach((ch)=>{
		chunk+=ch;
		if(chunk.length==size){
			ans.push(chunk)
			chunk="";
		}
	}) 

	ans.push(chunk); 

	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
