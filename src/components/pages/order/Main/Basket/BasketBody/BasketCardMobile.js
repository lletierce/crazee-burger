import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect";
import { useWindowDimensions } from "react-native-web";
import { MdDeleteForever } from "react-icons/md";

export default function BasketCardMobile({
  title,
  price,
  quantity,
  imageSource,
  onDelete,
}) {
  const { width } = useWindowDimensions(); // @TODO : move to gloabl?

  return (
    <BasketCardMobileStyled 
      width={width} 
    >
      
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="info">
          <div className="price">
            <span>{price}</span>
          </div>
          <div className="quantity">
            <CasinoEffect count={`x ${quantity}`} />
          </div>
        </div>
      </div>
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
    </BasketCardMobileStyled>
  );
}

const BasketCardMobileStyled = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.cardBasket};

  .image {
    width: 50px;
    min-width: 50px;

    img {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    .title {
      display: flex;
      align-items: center;

      font-size: ${theme.fonts.size.SM};
      font-weight: ${theme.fonts.weights.semiBold};
    }

    .info {
      display: flex;
      flex-direction: row;
      column-gap: 5px;

      font-size: ${theme.fonts.size.XS};
      color: ${theme.colors.primary};
    }
  }

  .delete-button {
    width: 24px;
    min-width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: ${theme.borderRadius.round};
    border-bottom-right-radius: ${theme.borderRadius.round};

    background: ${theme.colors.red};
    color: ${theme.colors.white};
    cursor: pointer;

    .icon {
        width: ${theme.fonts.size.P2};
        height: ${theme.fonts.size.P2};
      }
  }

  :hover {
        .icon {
          color: ${theme.colors.dark};
        }
        :active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }

  ${({ width }) => width <= theme.breakpoints.screen.xs && fontMobileStyled}
`;

const fontMobileStyled = css`
  .text-info .title span {
    font-size: ${theme.fonts.size.XS};

    max-width: 64px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .text-info .info .price {
    font-size: ${theme.fonts.size.XXS};

    max-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .text-info .info .quantity {
    font-size: ${theme.fonts.size.XXS};
    // could manage text-overlow for disproportionate value
  }
`;