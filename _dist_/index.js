const Url= 'https://platzi-avo.vercel.app'
const AppNode= document.querySelector('#app')
AppNode.className="grid gap-4 grid-cols-1 grid-rows-1 mt-12 justify-items-center  lg:w-48:grid-cols-4 lg:grid-cols-4  ";

const formatPrice=(price)=>{
 const newPrice= new window.Intl.NumberFormat('en-EN',{
    style:'currency',
    currency:'USD'
  }).format(price)

  return newPrice
}


const GetAvocados= async (Url)=>{
    const respuesta= await fetch(`${Url}/api/avo`)
    const data= await respuesta.json()
      data.data.forEach(item =>{

        const AllItems= []
    //   -crear imagen
   const imagen= document.createElement('img')
   imagen.src= `${Url}${item.image}`
   imagen.className='imagen'


    //   -crear titulo
    const titulo= document.createElement('h2')
    titulo.textContent=item.name;
    titulo.className="text-xl"
    //   -crear precio
    const price= document.createElement('div')
    price.textContent= formatPrice(item.price);
    price.className='text-gray-600 price'

    const boton= document.createElement('button')
    boton.textContent='Add to cart'
    boton.className='px-2 py-1 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none boton'
   
       
    
        const container= document.createElement('div')
        container.append(imagen,titulo,price,boton)
        container.className='card';

      AllItems.push(container)
      AppNode.append(...AllItems)

      })
}

GetAvocados(Url)