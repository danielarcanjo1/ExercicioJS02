
const students = [
    {
        name: "Daniel",
        note1: 7.2,
        note2: 7
    },
    {
        name: "Mayra",
        note1: 5.2,
        note2: 7
    },
    {
        name: "Jose",
        note1: 3.2,
        note2: 9
    },
    {
        name: "Rosa",
        note1: 1.2,
        note2: 3
    }
]

function average(note1,note2) {
    let average = (note1+note2)/2
    return average
}

function aprovationMessage(average){
    if( average >= 7)
     alert("Parabens!!!! voce foi aprovado")
     else
     alert("Não foi dessa vez, estude um pouco mais")
}

for(let i =0; i<students.length; i++){   
    if(average(students[i].note1,students[i].note2) >=7)
    alert(`A media do aluno ${students[i].name} foi ${average(students[i].note1,students[i].note2)}\nPARABENS ${students[i].name} VOCE FOI APROVADO`)    
    else
    alert(`A media do aluno ${students[i].name} foi ${average(students[i].note1,students[i].note2)}\nNão foi dessa vez ${students[i].name}, estude um pouco mais`) 
}

