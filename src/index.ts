/**Archivo principal de Todos */

import { Todo } from './clases/Todo';

(()=>{
    let todos = new Todo ()
    const listaGeneral = document.getElementById("listaGeneral") as HTMLDivElement | null
    const listaCompletos = document.getElementById("listaCompletos") as HTMLDivElement | null
    const listaPendientes = document.getElementById("listaPendientes") as HTMLDivElement | null
    const btnAddTodo =  document.getElementById("btnAddTodo") as HTMLButtonElement | null
    const frmTodo = document.getElementById("frmTodo") as HTMLInputElement 
    const totalTareas = document.getElementById('totalTareas') as HTMLElement | null
    const totalTareasCompletadas = document.getElementById('totalTareasCompletadas') as HTMLElement | null
    const totalTareasPendientes = document.getElementById('totalTareasPendientes')  as HTMLElement | null

    btnAddTodo?.addEventListener("click", () => {
        if ( frmTodo.value.trim().length > 2) {
            todos.addTodo (frmTodo.value.trim()) 
        };
        frmTodo.value = ""
        mostrarTodos()
        mostrarTodosPendientes()
        mostrarTotales ()
        frmTodo.focus()
    })

    const mostrarTodos = ():void => {
        // mostramos los todos en la página web 
        ( listaGeneral != null) ? listaGeneral.innerHTML = "" : null
        todos.listToDos.forEach ( todo => {
            let element = document.createElement ("p")
            element.classList.add ("elementoTodo")
            if ( todo.complete === true) {
                element.classList.add ("todocompleto")
            }
            element.addEventListener("click", completarTarea)
            element.innerHTML = todo.name
            listaGeneral?.appendChild( element)
        })
    }

    // Mostramos los todos completos
    const mostraTodosCompletos = ():void => {
        (listaCompletos != null) ? listaCompletos.innerHTML = "" : null
        todos.todosComplete.forEach ( todo => {
            let element = document.createElement ("p")
            element.classList.add ("elementoTodo")
            element.addEventListener("click", completarTarea)
            element.innerHTML = todo.name
            listaCompletos?.appendChild( element)
        })
    }

    // Mostramos todso pendientes 
    const mostrarTodosPendientes = ():void => {
        (listaPendientes != null) ? listaPendientes.innerHTML = "" : null
        todos.todosPending.forEach ( todo => {
            let element = document.createElement ("p")
            element.classList.add ("elementoTodo")
            element.addEventListener("click", completarTarea)
            element.innerHTML = todo.name
            listaPendientes?.appendChild( element)
        })
    }

    const completarTarea = (e) => {
        todos.updateTodo (e.target.innerHTML)
        console.log ( todos.listToDos)
        mostraTodosCompletos()
        mostrarTodosPendientes()
        mostrarTodos()
        mostrarTotales ()
    }

    const mostrarTotales = () => {
        (totalTareas != null) ? totalTareas.innerHTML = todos.listToDos.length.toString() : null;
        (totalTareasCompletadas != null) ? totalTareasCompletadas.innerHTML = todos.todosComplete.length.toString() : null;
        (totalTareasPendientes != null) ? totalTareasPendientes.innerHTML = todos.todosPending.length.toString() : null;
    }
})()

