

/**
 * Closure is a feature where an inner function has access
   to the outer (enclosing) function's variables even
   after the outer function has executed. 
 * 
 */


 const outerFunction = (outsideData) => {
    console.log('Running OuterFunction');

    const innerFunction = (insideData) => {
        console.log('Outer_Var',outsideData);
        console.log('Inside_Var',insideData);
        
    }
    return innerFunction;
 }  

 const call = outerFunction("out");

 call("in")