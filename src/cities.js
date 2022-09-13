

//1 js file içerisinde birden fazla obje, func vb yapılar export edilebilir

export const cities = ['İzmir', 'İstanbul', 'Ankara'];
export const countries = ['Türkiye', 'ABD', 'Rusya', 'Azerbaycan']

function Hello(){
    return "Hello React!!"
}


//default anahtar kelimesiyle export edilen bir obje, diğer js file içerisinden çağrılırken istenilen isim verilebilir.
 
export default Hello



