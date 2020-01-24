


document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement("button");
    button.innerText = "addSquare"
    document.body.appendChild(button);
    let counter = 0;

    let container = document.createElement('div')
    container.classList.add('container')
    document.body.appendChild(container)

    button.addEventListener("click", function () {
        counter++
        let square = document.createElement("div");
        document.body.appendChild(square);
        square.classList.add('square')
        container.appendChild(square)
        square.id = counter

        square.addEventListener("mouseover", function () {
            square.innerText = square.id;
        })
        square.addEventListener("mouseout", function () {
            square.innerHTML = " "
        })
        square.addEventListener("click", function () {

            let colorChange = ['red', 'yellow', 'brown', 'grey', 'orange',
                'blue', 'green', 'black'];
            square.style.backgroundColor = colorChange[Math.floor((Math.random() * colorChange.length))];
        })
        square.addEventListener("dblclick", function () {
            if (square.id % 2 == 0) {
                if (document.body.contains(square.nextSibling)) {
                    square.nextSibling.remove()
                } else {
                    alert('There is no square to delete.')
                }
            } else {

                if (document.body.contains(square.previousSibling)) {
                    square.previousSibling.remove()
                } else {
                    alert('There is no square to delete.')
                }
            }
        })

    })



})

