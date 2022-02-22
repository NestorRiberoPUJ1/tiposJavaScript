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

console.log(promedio([1,2,3]));
console.log(existe([1,2,3],4));