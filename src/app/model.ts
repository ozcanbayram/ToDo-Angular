export class Model{
    user;
    items;

    constructor(){
        this.user = "Ozcan";
        this.items = [
            new TodoItem("Örnek görev görünümü",false)
          ];
    }
}



export class TodoItem{
    description;
    action;
    constructor(description: string, action: boolean){
        this.description = description;
        this.action = action;
    }
}