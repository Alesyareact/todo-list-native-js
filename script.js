//DRAG and DROP
let globalDraggableElement;



// function generationId(){
//     const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
//     return id;
// }

// const dragStart = function (e) {
//     console.log('dragStart');
//     setTimeout(() => {
//         this.classList.add('hide');
//     }, 0)
// };

// const dragEnd = function () {
//     console.log('dragEnd');
//     this.classList.remove('hide');
// };

// const dragOver = function (evt) {
//     console.log('dragOver');
//     evt.preventDefault();
// };

// const dragEnter = function (evt) {
//     console.log('dragEnter');
//    evt.preventDefault()
//     this.classList.add('hovered');
// };

// const dragLeave = function () {
//     console.log('dragLeave');
//     this.classList.remove('hovered');
// };

// const dragDrop = function () {
//     console.log('dragDrop');
//     this.append(newDiv);
//     this.classList.remove('hovered');
// };




// const cell = document.querySelectorAll('.block');


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
        document.getElementById(idInputField).value = ''; //очистили после клика поле ввода

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

        //EDIT CARD 
        // const newDivs = document.querySelectorAll('.yourTask');

        // for (let i = 0; i < newDivs.length; i++) {
        //     newDivs[i].addEventListener('click', function() {
        //         const input = document.createElement('input');
        //         input.value = this.innerHTML;
        //         this.appendChild(input);
                
        //     })
        // }
    } 

    
    

 
}




function clickPress(event, idInputField, idColumn) {
    if (event.keyCode == 13) {
        addTask(idInputField, idColumn)
    }
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////


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

