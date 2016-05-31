import NotesList from '../../components/notes/list/list';
//
export class NotesService {
    
    constructor() {

    }
    
    save (list: NotesList) {
        localStorage.setItem(list.id, JSON.stringify(list.notes));
    }
    
    load(listId){
        return JSON.parse(localStorage.getItem(listId));
    }
    
}
