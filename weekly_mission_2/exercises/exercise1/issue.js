const issue = {
  title: "Dudas sobre Launch X",
  repositoryNameAssociated: "LaunchX",
  status: "open",
  numberOfComments: 100,
  labels: 199,
  author: "monicaps",
  dataCreated: "25-04-2022",
  lastUpdated: "25-04-2022",
  getTitleAndAuthor: function(){
    return `This issue ${this.title} was created by ${this.author}`
  },
  getGeneralInfo: function(){
    return `Issue information:\nTitle: ${this.title}
    \nCreated by: ${this.author}\nRepository Name Associated:${this.repositoryNameAssociated}
    \nStatus:${this.status}\nNumber of Comments:${this.numberOfComments}
    Labels:${this.labels}\nData Created:${this.dataCreated}\nLast Updated:${this.lastUpdated}`
  }
}

console.log("Titulo del issue:" + issue.name)
console.log("Información del issue: " + issue.getGeneralInfo())