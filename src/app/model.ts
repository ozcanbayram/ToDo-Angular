export class Model{
    user;
    items;

    constructor(){
        this.user = "Ozcan";
        this.items = [
            new TodoItem("Kahvalltı",true),
            new TodoItem("Spor",false),
            new TodoItem("Çalışma",false),
            new TodoItem("Sinema",false)
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