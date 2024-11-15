const greeting = "hello";

const isPalindrome = (greeting="") => {
    const reversed =  greeting.split("").reverse().join("");
    // console.log(reversed);
    return greeting === reversed;
}

console.log(isPalindrome(greeting));
