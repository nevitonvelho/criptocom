import { CoinContainer } from "./styles"

const Coins = ({name, price, symbol, marketcap, volume, image, 
priceCharge, id}) => {
  return (
    <CoinContainer>
        <div className="coin_row">
            <div className="coin">
                <img src={image} alt={name}  className="coin_img"/>
                <h1 className="coin_h1">{name}</h1>
                <p className="coin_symbol">{symbol}</p>
            </div>

            <div className="coin_data">
                <p className="coin_price">R${price}</p>
                <p className="coin_volume">R${volume.toLocaleString()}</p>

                {priceCharge < 0 ? (
                    <p className="coin_percent text-red-600">
                        {priceCharge.toFixed(2)}%
                    </p>
                ) : (
                    <p className="coin_percent text-blue-600">
                        {priceCharge.toFixed(2)}%
                    </p>
                )}

                <p className="coin_marketcap">
                   R${marketcap.toLocaleString()}
                </p>

            </div>
        </div>
    </CoinContainer>
  )
}

export default Coins
