/**clase para los todos. */

import { Itodo } from '../interfaces/iTodo';

export class Todo {
    constructor (
        public listaTodos: Itodo[] = []
    ) {}

    // agregar todo
    addTodo(name: string):void {
        let todo: Itodo = {
            name: name,
            complete: false
        }
        this.listaTodos.push(todo);
    }

    // eliminar todo
    removeTodo(todo: string):void {
        let todosAux = this.listaTodos.filter (nodotodo => {
            if ( nodotodo.name !== todo ) {
                return nodotodo
            }
        })
        this.listaTodos = todosAux;
    }

    // actualizar todo
    updateTodo ( nameTodo: string ):void {
        this.listaTodos.forEach (todo => {
            if ( todo.name === nameTodo ) {
                todo.complete = !todo.complete;
            }
        })
    }

    // devolver todos.
    get listToDos () {
        return this.listaTodos 
    }

    // devolver todos completos
    get todosComplete () {
        return this.listaTodos.filter ( todo => todo.complete === true)
    }

    // devolver todos incompletos
    get todosPending () {
        return this.listaTodos.filter ( todo => todo.complete === false)
    }

}