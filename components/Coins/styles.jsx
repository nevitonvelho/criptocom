import styled from "styled-components";

export const CoinContainer = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;

    .coin_row{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 80px;
        border-bottom: 1px solid #000d20;
        width: 1000px;
        padding: 0rem 2rem;   

        :hover{
        background: #000711c1
        }

        .coin{
            display: flex;
            align-items: center;
            padding-right: 24px;

            .coin_img{
                height: 30px;
                width: 30px;
                margin-right: 10px;
            }
        }

        .coin_h1{
            font-size: 16px;
            width: 150px;
            
        }

        .coin_symbol{
            text-transform: uppercase;
        }

        .coin_data{
            display: flex;
            text-align: right;
            justify-content: space-between;
            width: 100%;
        }

        .coin_price {
            width: 110px;
        }

        .coin_volume {
            width: 155px;
        }

        .coin_marketcap {
            width: 230px;
        }

        .coin_percent {
            width: 100px;
        }

    
        
    }

    
    
`