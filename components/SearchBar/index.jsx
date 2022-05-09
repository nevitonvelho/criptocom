import { Input } from "./styles"



const SearchBar = ({...rest}) => {

  return (<>

    <div className="hero" >
      <div className="justify-center text-center hero-content text-neutral-content">
        <div className="max-w-md ">
            <h1 className="mb-5 text-5xl font-bold  bg-gradient-to-r from-blue-200 to-blue-600 text-transparent bg-clip-text">
            Top 100 Criptomoedas
            </h1> 
            <p className="mb-5">
              Preços de criptomoedas por valor de mercado
            </p> 
        </div>
      </div>
    </div>
            <Input >
                <input {...rest} />
            </Input>


  </>
  )
}

export default SearchBar
