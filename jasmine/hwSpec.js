//Ya sea en el mismo archivo o en uno diferente, crea una prueba o función que devuelva el número más grande del array. Por ejemplo, returnLargest([1,3,10]) debería devolver 10 y returnLargest([-2,-5,-10]) debería devolver -2. Una vez que hayas escrito la prueba, ejecútala (sin escribir toda la función para asegurarte de que fallen todas las pruebas), luego completa la función cerciorándote de que pase todas las pruebas. 


function returnlarg(array){
    var m=array[0];
    for (var i =0; i<array.length;i++){
       if (array[i]>m) {
        m=array[i];
       }
    }
    return m;
}
var array=[1,10,4,6,3];
z=returnlarg(array);


describe("returnlarg", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(returnlarg([1,3])).toEqual(9); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(returnlarg([2,5,7,8])).toEqual(6); 
    }); 
});
    
