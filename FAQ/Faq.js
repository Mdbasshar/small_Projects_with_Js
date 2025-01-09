const faq = [
    {
        'question' : 'What is Java Script?',
        'answer' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat sapiente ducimus consequuntur, eligendi itaque recusandae tenetur eos.'
    },
    {
        'question' : 'How do I start learning Java Script?',
        'answer' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat sapiente ducimus consequuntur, eligendi itaque recusandae tenetur eos.'
    },
    {
        'question' : 'What is JSON in Java Script?',
        'answer' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat sapiente ducimus consequuntur, eligendi itaque recusandae tenetur eos.'
    },
    {
        'question' : 'What is DOM in Java Script?',
        'answer' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat sapiente ducimus consequuntur, eligendi itaque recusandae tenetur eos.'
    }
]
const faqContainer = document.getElementById('faq-container');


for(i=0;i<faq.length;i++){
    const question = document.createElement('div');
    faqContainer.appendChild(question)
    question.classList.add('question');
    question.innerText = faq[i]['question'];
    console.log(question)
    
    const answer  = document.createElement('p');
    question.appendChild(answer)
    answer.classList.add('answer');
    answer.innerText = faq[i]['answer']
    console.log(answer)

    const button = document.createElement('button');
    question.appendChild(button)
    button.innerText = '+'

    button.addEventListener('click',()=>{
        answer.classList.toggle("active");
    })
}



// const makeHtml = data =>{
//     return `<detail>
//         <summary>${data.question}</summary>
//         <p>${data.answer}</p>
//     </detail>`
// };

// document.body.innerHTML = makeHtml(faq)