class ApiResponse {
  constructor(statusCode,data,message = "Success"){
    this.statusCode = statusCode
    this.data = data
    this.message = message // Chai aur Code ne this.message ki jagah this,message likha h
    this.success = statusCode < 400 
  }
}