//DRAG and DROP
let globalDraggableElement;

function addTask(idInputField, idColumn){
    const valueOfInput = document.getElementById(idInputField).value;

    if (valueOfInput !== ""){
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'yourTask');
        newDiv.setAttribute('draggable', 'true');
        newDiv.setAttribute('contenteditable', 'true');
        dragAndDrop(newDiv)

        const firstBox = document.createElement('div');
        firstBox.setAttribute('class', 'firstBox');
        firstBox.innerHTML = `<p>${valueOfInput}</p>`;

        newDiv.appendChild(firstBox);
    

        document.getElementById(idColumn).appendChild(newDiv);
        document.getElementById(idInputField).value = '';

        //DELETE CARD
        const secondBox = document.createElement('div');
        const trashButton = document.createElement('button');

        secondBox.setAttribute('class', 'secondBox');
        secondBox.appendChild(trashButton);
        trashButton.innerHTML = '<i class="fa fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        newDiv.appendChild(secondBox);
        trashButton.addEventListener('click', (event) => {
            const item = event.target;
            if (item.classList[0] === "trash-btn"){
                const todo = item.parentElement.parentElement;
                todo.remove();
            }
        })
    } 
}

function clickPress(event, idInputField, idColumn) {
    if (event.keyCode == 13) {
        addTask(idInputField, idColumn)
    }
}

const dragAndDrop = function(card) {
    const cells = document.querySelectorAll('.js-cell');

    const dragStart = function(){
        globalDraggableElement = card;
        setTimeout(() => {
           this.classList.add('hide') 
        }, 0)
    }
    
    const dragEnd = function(){
        this.classList.remove('hide') 
    }
    
    const dragOver = function(event){
        event.preventDefault();
    }
    const dragEnter = function(event){
        event.preventDefault();
    }
    
    const dragLeave = function(){
        this.classList.remove('hovered');
    }

    const dragDrop = function(){
        console.log(globalDraggableElement)
        this.append(globalDraggableElement);
    }
    
    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver)
        cell.addEventListener('dragenter', dragEnter)
        cell.addEventListener('dragleave', dragLeave)
        cell.addEventListener('drop', dragDrop)
    })
    
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
}