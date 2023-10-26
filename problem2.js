//Products Cart Object
// Given an input of products in the below format (Name Quantity Price)
    
let food=["Rice", "Dal", "Salt"]
let quantity=[2, 3, 1]
let price=[60, 50, 20]

let data=[]

for(let i=0;i<food.length;i++){
	let obj={}
	obj.name=food[i]
	obj.quantity=quantity[i]
	obj.price=price[i]
	//data.push(obj)
	
	total= function(){
		let sum=0
	    let product=1
	    for(let i=0;i<data.length;i++){
            product=quantity[i]*price[i]
		    sum=sum+product
	}
	console.log(sum)
	}
data.push(obj)
}
    
	total()
	
	
	
	
	



 

