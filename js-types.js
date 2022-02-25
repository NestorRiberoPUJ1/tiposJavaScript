//SUMATORIA
function sumatoria(array)
{
    var result=0;
    for(var i=0; i< array.length; i++)
    {
        result+=array[i];
    }
    return result;
}

//Mayor
function mayor(array)
{
    var mayor=array[0]
    for(var i=0; i< array.length; i++)
    {
        if(array[i]>mayor)
        {
            mayor=array[i];
        }
    }
    return mayor;
}

var Estudiante=
{
    "nombre"    :   "Checo",
    "apellido"  :   "Perez",
    "edad"      :   25,
    "hobbies"   :   ["Gestión", "Defensa"],
    "infoCompleta": function()
                    {
                        console.table(this)
                    }
}

function promedio(list)
{
    var promedio = 0;
    for(var i=0; i< list.length; i++)
    {
        promedio+=list[i];
    }
    promedio=promedio/list.length;
    return promedio;
}

function existe(list,item)
{
    for(var i=0; i< list.length; i++)
    {
        if( list[i]==item)
        {
            return true;
        }
    }
    return false;
}

function encontrarElementos(lista,elemento)
{
    var contador=0;
    var posiciones=[];
    for(i=0;i<lista.length;i++)
    {
        if(lista[i]==elemento)
        {
            contador++;
            posiciones.push(i);
        }
    }
    var obj={
                "contador":contador,
                "posiciones": posiciones,
                "elemento": elemento
            }
    return obj;
}
//Funciones 2
var sumatoriaFlecha = (param1,param2) =>param1+param2;

/*
array=[3,4,5,1,2,6,8,9,5];
array.forEach(function(num,i,arr){
    //console.log(num);
    console.log(i);
    //console.log(arr);
});
function imprime(num,posicion, arreglo){
    console.log(num);
}
array.forEach(imprime);
*/

function factorial(num)
{
    var result=1;
    for(x=1; x<=num; x++)
    {
        result=result*x;
    }
    return result;
}

console.log(factorial(4));

function sumaPositivos(lista)
{
    var result=0;
    lista.forEach(function(num){
        if(num>0)
        {
            result +=num;
        }
    });
    return result;
}

console.log(sumaPositivos([1,2,3,4,-2,-4,0]));