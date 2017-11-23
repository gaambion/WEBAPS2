function Car()
{
    var self = this;
    this.brand = "";
    this.model = "";
    this.drive = function()
    {
        console.log("vroom vroom");
        console.log("This " + self.brand + " model :" + self.model);
    }
}

module.exports = Car;
