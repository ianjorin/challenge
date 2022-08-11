let num = [2,7,11,15]

let parts =[]

const target = 9

function AddUP(arr,target){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let temp_target = arr[i] + arr[j];
            if(temp_target == target){
                parts.push(arr[i],arr[j])
                console.log(parts)
                
            } break;
        }
      }
}


AddUP(num,target);