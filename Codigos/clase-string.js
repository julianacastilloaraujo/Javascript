// Creacion de string
const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas simples"
const terceraoPCION = `Comillas simples`

// 1. Concatenacion: Opcion +
const direccion = "Calle falsa 123"
const ciudad = "Springfield"
const direccionCompleta = "Mi dirrecion completa es" + direccion + ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio = "Mi direccion completa es " + direccion + " " + ciudad
console.log(direccionCompletaConEspacio)

// 2. Concatenacion: Template Literals 

const nombre = 'Juliana'
const pais = '🇨🇴'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

// 3. Concatenacion: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = '🇲🇽'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' 🌯 '))

// 4. Concatenacion: concat()
const hobbie1 = 'correr'
const hobbie2 = 'leer'
const hobbie3 = 'estudiar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '. ')
console.log(hobbies)

// Caracteres de escape
// const whatDoIDo = 'I'm Software Engineer'

// 1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer"

// 2. Barra invertida
const barraBarraInvertida = 'I\'m Software Engineer'

// 3. Template Literals
const escapeComillaInvertida = `I'm Software Engineer`

// Escritura de Strings Largos
/*
    Construir el proceso
    Aprender del error
    Y compartir a tu lado
    Es la clave del amor
*/

const poema = "Construir el proceso,\n" + 
            "Aprender del error,\n" +
            "Y compartir a tu lado,\n" +
             "Es la clave del amor"
console.log(poema)


const poema2 = "Construir el proceso,\n\
             Aprender del error,\n\
             Y compartir a tu lado,\n\
             Es la clave del amor"
console.log(poema2)

