import styled from "styled-components";

export default function Product({ title, imageSource, price}) {
    return (
        <ProductStyled className="produit">
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="info-text">
                <div className="description">
                    <div className="title">{title}</div>
                    <div className="price">{price}</div>
                    <button className="add-button">Ajouter</button>
                </div>
            </div>
        </ProductStyled>
    )
}

const ProductStyled = styled.div`
    background: red;
    width: 240px;
    height: 330px;

  .image{
    width: 100px;
    height: auto;
    border: 1px solid fuchsia;
    img{
      width: 100%;
      height: 100%;
    }
  }

  .description{
    border: 1px solid fuchsia;
  }
`;