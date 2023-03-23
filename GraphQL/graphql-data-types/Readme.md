GraphQL Query:

query {
  employeeId
  employeeName
  employeeAge
  employeeCompany{
    companyId
    companyName
    city
    state
    country
  }
  employeeNote(note: "This is note", date:"23/1/2022")
  employeeProjects(tenure:3,alphabet:"a"){
    projectId
    projectName
    projectTenure
  }
}