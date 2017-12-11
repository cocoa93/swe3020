
var URLS = {
    prefix : "https://cocoa93.github.io/swe3020/todo/",
    groupList: "json/groupList.json",
    groupAdd: "json/groupAdd.json",
    taskAdd:"json/taskAdd.json",
    taskList:"json/taskList.json",

}

function network(command, end, arg){
    switch(command){
    case"showPage":
        $.get(URLS.prefix + URLS.taskList,end);
        break;
    case "addTask":
        $.get(URLS.prefix+URLS.taskAdd,{name:arg},end);
        break;
    case "showPage_info":
        $.get(URLS.prefix + URLS.groupList,end);
        break;
    case"addList":
        $.get(URLS.prefix + URLS.groupAdd, {name:arg}, end);
        /*
        data.data.push({name:arg..});
        end(data);
        */
        break;
    case"showList":
        $.get(URLS.prefix + URLS.groupList, end);
        /*
        end(data);
        */
        break;
    default: throw "invalid command";
    }
}