/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path = path.replace("/./" , "/");
    let nonEmptyPath = [];
    for (let i = path.length-1; i >= 0; i--) {
        if(path[i] == "/"){
            path = path.slice(0,-1);
        }
        else {
            break;
        }
    };
    let splittedPath = path.split("/").slice(1);
    
    for (let i = 0; i < splittedPath.length; i++) {
        if(splittedPath[i] == "." || splittedPath[i] == "/") splittedPath[i] = "";
        if(splittedPath[i] == ".."){
        
            splittedPath[i] = "";
            splittedPath[nonEmptyPath[nonEmptyPath.length-1]] = "";
            if((splittedPath[nonEmptyPath[nonEmptyPath.length-1]]) != undefined)  nonEmptyPath.pop();
        }
        else if( splittedPath[i] != null &&  splittedPath[i] != ""){
            nonEmptyPath.push(i);
        }
    }
    return "/"+ splittedPath.filter(Boolean).join("/");
}
// console.log(simplifyPath("/a/../../b/../c//.//"));
// console.log(simplifyPath("/a/./b/../../c/"));
console.log(simplifyPath("/a//b////c/d//././/.."));




