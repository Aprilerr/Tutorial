class MyParameters<T> {
    parameter: T[]
    constructor(){
        this.parameter = []
    }
    addParameter(parameter: T){
        this.parameter.push(parameter)
    }
    getParameter = () => this.parameter
}
const myParam = new MyParameters<string>()
myParam.addParameter("abc")
console.log(myParam.getParameter())
