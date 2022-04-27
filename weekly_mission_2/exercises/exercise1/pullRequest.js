const pullRequest = {
 title: "LaunchX",
 branchName: "main",
 dateCreated: "25-04-2022",
 status: "open",
 repositoryNameAssociated: "LaunchX",
 getStatus: function(){
   return this.status
 },
 getTitleAndAuthor: function(){
   return `Title: ${this.title} was created by ${this.author}`
 }
}

console.log("Titulo del pull Request:" + pullRequest.title)
console.log("Titulo y autor: " + pullRequest.getTitleAndAuthor())
