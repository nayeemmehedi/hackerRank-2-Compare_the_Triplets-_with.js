
let Compare_the_Triplets=(a,b)=>{
 
    let x = 0
    let y=0
 
    a.forEach( (value,index)=>{
 
     let aa = a[index]
     let bb = b[index]
     
     if (aa ===bb)
       return;
 
      aa>bb ? x+=1 : y +=1
 
    })
 
    return [x,y]
 
 
 }
 
 let ab =Compare_the_Triplets([1,1,1,7,2,1],[11,3,4,5,2,1])
 console.log(ab)
 
 
 
 