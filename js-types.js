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

Estudiante.infoCompleta();