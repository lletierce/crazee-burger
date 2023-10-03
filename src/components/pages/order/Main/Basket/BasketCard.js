import React from "react"
import styled, { css } from "styled-components"
import { MdDeleteForever } from "react-icons/md"
import { theme } from "../../../../../theme"
import { formatPrice } from "../../../../../utils/maths"

export default function BasketCard({
  title,
  price,
  quantity,
  imageSource,
  className,
  isModeAdmin,
  onDelete,
}) {
  return (
    <BasketCardStyled className={className} isModeAdmin={isModeAdmin}>
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{title}</span>
          </div>
          <span className="price">{formatPrice(price)}</span>
        </div>
        <div className="quantity">
          <span>x {quantity}</span>
        </div>
      </div>
    </BasketCardStyled>
  )
}

const BasketCardStyled = styled.div`
  cursor: ${({ isModeAdmin }) => (isModeAdmin ? "pointer" : "auto")};
  /* border: 1px solid red; */
  box-sizing: border-box;
  height: 86px;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;

  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.cardBasket};

  position: relative;

  .image {
    box-sizing: border-box;
    height: 70px;
    /* border: 1px solid red; */
    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    user-select: none;
    box-sizing: border-box;
    /* background: green; */
    /* border: 1px solid green; */
    display: grid;
    grid-template-columns: 70% 1fr;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.primary};

    .left-info {
      display: grid;
      grid-template-rows: 60% 40%;
      margin-left: 21px;
      /* align-items: center; */
      .title {
        display: flex;
        align-items: center;
        /* background: yellow; */
        font-family: ${theme.fonts.family.stylish};
        font-size: ${theme.fonts.size.P3};
        line-height: 32px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        /* sans cette div avec "min-width: 0", l'ellipsis ne fonctionne pas dans un span : https://semicolon.dev/tutorial/css/text-overflow-ellipsis-doesnt-work#:~:text=If%20your%20text%2Doverflow%20is,Grid%20or%20on%20a%20Table. */
        min-width: 0;
        span {
          overflow: hidden;
          /* width: 100%; */
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .price {
        /* background: blue; */
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weights.medium};
        font-family: ${theme.fonts.family.openSans};
        /* color: ${theme.colors.white}; */
      }
    }

    .quantity {
      box-sizing: border-box;
      /* border: 1px solid lightblue; */
      /* background: lightblue; */
      font-weight: ${theme.fonts.weights.medium};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 20px;
      font-size: ${theme.fonts.size.SM};
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
  }

  /* hover de la card */
  :hover {
    .delete-button {
      /* border: 1px solid red; */
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }

      /* behaviour on delete-button hover */
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
    }
  }
`
