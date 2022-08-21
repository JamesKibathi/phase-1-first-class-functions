function receivesAFunction(cb){
    return cb();
}
receivesAFunction(()=>"This is a change ");


function returnsANamedFunction(y){
    return function myNamed(){
       return ("Yooh "+y);
    }
}

returnsANamedFunction("Morning")();

//console.log(ans);

function returnsAnAnonymousFunction(menu){
    return(function(){console.log(`I will have ${menu}`)});
}

returnsAnAnonymousFunction("Chips masala")();
