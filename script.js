const list = {
    input: document.querySelector('input'),
    button: document.querySelector('button'),
    tarefas: document.querySelector('.tarefas'),
    vazia: document.querySelector('.listaVazia'),
    msgErro: document.querySelector('.erro') 
}

//Adiciona tarefa na lista
list.button.onclick = ()=>{
    if(list.input.value !== ''){

    let novoLi = document.createElement('li');
    novoLi.innerText = list.input.value;
    list.tarefas.appendChild(novoLi);

    list.input.value = '';
    list.input.focus(); 

    list.msgErro.classList.remove('active');

    atualizarItens();
        
    }else{
        list.msgErro.classList.add('active');
    }
}


//Remover tarefa da lista

function atualizarItens(){
    itensCriados = list.tarefas.querySelectorAll('li'); 

    itensCriados.forEach((item)=>{
    item.onclick =()=>{
        if(!item.classList.contains('listaVazia'))
        {
            list.tarefas.removeChild(item)
            atualizarItens();
        }
    }});

    if(itensCriados.length <= 1){
        list.vazia.classList.add('active');
    }else{
        list.vazia.classList.remove('active');
    }
}

atualizarItens();

//Lista vazia

