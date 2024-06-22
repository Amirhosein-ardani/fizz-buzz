let numbers = prompt("Enter the number.");
switch (true) {
  case numbers % 5 == 0 && numbers % 3 == 0:
    {
      alert("fizzbuzz");
    }
    break;
  case numbers % 5 == 0:
    {
      alert("fizz");
    }
    break;
  case numbers % 3 == 0:
    {
      alert("buzz");
    }
    break;

  default: {
    alert("Does not exist");
  }
}
console.log(numbers);
