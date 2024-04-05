if (true && true){ //$and - &
    //dvata uslovi mora da bidat tocni
}
//true and true - return true
//true and false - return false
//false and true - return false
//false and false - return false

if(false || true){  //$or - |
    //dovolno e samo eden od operatorite da bide tocen
}

//true and true - return true
//true and false - return true
//false and true - return true
//false and false - return false

if(!true ){
    //ni pravi negacija (obratno) 
    // od true ni pravi false
    // od false ni pravi true
}

//NOR operator is a combination of NOT and OR operators
//NOR operator is not a built in operator in most programing languages
// and it is not as common as AND, OR and NOT operators

if( !(false || false)){
    // nor operation
}

if(true){
    // if true execute this
}
else{
    // if false execute this
}

//if (ova){
// izvrsi
//} else
// ako ne e tocno izvrsi tuka
//}