var skills = ["Javascript", "ReactJS", "React Native"];


function temHabilidade(skills) {
    
    if(skills.indexOf("Javascript") !== -1){
        return true
    }else{
        return false
    }
     
}

console.log(temHabilidade(skills))
