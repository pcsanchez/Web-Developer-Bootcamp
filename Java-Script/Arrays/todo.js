var todos = [];
window.setTimeout(function(){
    var input = prompt("What would you like to do?");
    while(input!=="quit"){
        if(input === "list"){
            console.log("**********");
            todos.forEach(function(task,i){
                console.log(i + ": " + task);
            });
            console.log("**********");
        } else if(input === "new"){
            var newTodo = prompt("What would you like to add?");
            todos.push(newTodo);
            console.log(newTodo + " added to list");
        } else if(input === "delete"){
            var delTodo = prompt("Enter the index you want to delete");
            todos.splice(delTodo,1);
            console.log("Item Deleted");
        }

        input = prompt("What would you like to do?");
    }
    console.log("You quit the application!");
},500);
