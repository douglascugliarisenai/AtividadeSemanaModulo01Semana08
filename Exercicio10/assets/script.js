const inputAtividade = document.querySelector('.txtAtividade');
const btnAdicionar = document.querySelector('#btn-adicionar');
const bodyListaAtividades = document.querySelector('#listAtividades');


let id = 1;


function adicionarItem() {
    const atividade = inputAtividade.value.trim();

    if (atividade) {
        const novaLinha = document.createElement('tr');
        const idAtividade = document.createElement('td');
        const atividadeCell = document.createElement('td');
        const buttonAcao = document.createElement('td');

        idAtividade.textContent = id++;
        atividadeCell.textContent = atividade;


        //------------Ação Concluir-------------
        const concluirButton = document.createElement('button');
        concluirButton.textContent = 'Concluir';
        concluirButton.style.cssText = 'background-color: green; color: white;'

        concluirButton.addEventListener('click', () => {
            atividadeCell.style.cssText = 'text-decoration: line-through;'
            concluirButton.setAttribute('disabled', 'disabled')
        });

        buttonAcao.appendChild(concluirButton);
        //------------Ação Concluir-------------

        //------------Ação Deletar-------------
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.cssText = 'background-color: red; color: white;'

        deleteButton.addEventListener('click', () => {
            novaLinha.remove();
        });

        buttonAcao.appendChild(deleteButton);
        //------------Ação Deletar-------------


        novaLinha.appendChild(idAtividade);
        novaLinha.appendChild(atividadeCell);
        novaLinha.appendChild(buttonAcao);
        
        bodyListaAtividades.appendChild(novaLinha);

        inputAtividade.value = '';
    }

}

