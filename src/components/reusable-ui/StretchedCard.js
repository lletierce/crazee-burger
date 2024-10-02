import styled, { css } from "styled-components";
import { theme } from "../../theme";
import Button from "./Button";
import { TiDelete } from "react-icons/ti";
import { IoMdAddCircle } from "react-icons/io";
import { fadeInFromRight, fadeInFromTop } from "../../theme/animations";

export default function StretchedCard({
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
  onAdd,
  overlapImageSource,
  isOverlapImageVisible,
}) {
  // state (vide)

  // comportements (vide)

  // affichage
  return (
    <StretchedCardStyled
      className="produit"
      onClick={onClick}
      isHoverable={isHoverable}
      isSelected={isSelected}
    >
      <div className="card">
        {hasDeleteButton && (
          <button
            className="delete-button"
            aria-label="delete-button"
            onClick={onDelete}
          >
            <TiDelete className="icon" />
          </button>
        )}

        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{leftDescription}</div>
            {/* <div className="right-description">
              <Button
                className="primary-button"
                label={"Ajouter"}
                onClick={onAdd}
                disabled={isOverlapImageVisible}
              />
            </div> */}
          </div>
        </div>
        <div className="image">
          {isOverlapImageVisible && (
            <div className="overlap">
              <div className="transparent-layer"></div>
              <img
                className="overlap-image"
                src={overlapImageSource}
                alt="overlap"
              />
            </div>
          )}
          <img className="product" src={imageSource} alt={title} />
          {/* <button
            className="add-button"
            aria-label="add-button"
            onClick={onAdd}
          >
            <IoMdAddCircle className="icon" />
          </button> */}
          <Button
            className="primary-button"
            label={"Ajouter"}
            onClick={onAdd}
            disabled={isOverlapImageVisible}
          />
        </div>
      </div>
    </StretchedCardStyled>
  );
}

const StretchedCardStyled = styled.div`
  ${({ isHoverable }) => isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  height: 200px;
  width: 80vw;

  .card {
    background: ${theme.colors.white};
    box-sizing: border-box;

    height: 200px;
    display: grid;
    grid-template-columns: 1fr 40%;
    padding: 10px;
    padding-bottom: 5px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    position: relative;

    .delete-button {
      border: 1px solid red;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: ${theme.colors.primary};
      z-index: 2;
      padding: 0;
      border: none;
      background: none;
      animation: ${fadeInFromRight} ${theme.animations.speed.slow} ease-out;

      .icon {
        /* border: 1px solid blue; */
        height: 100%;
        width: 100%;
      }

      :hover {
        color: ${theme.colors.red};
        /* background-color: red; */
      }
      :active {
        color: ${theme.colors.primary};
      }
    }

    .add-button {
      border: 1px solid red;
      position: absolute;
      bottom: 30px;
      right: 15px;
      cursor: pointer;
      width: 50px;
      height: 50px;
      color: ${theme.colors.primary};
      z-index: 2;
      padding: 0;
      border: none;
      background: none;
      animation: ${fadeInFromRight} ${theme.animations.speed.slow} ease-out;

      .icon {
        /* border: 1px solid blue; */
        height: 100%;
        width: 100%;
      }

      :hover {
        color: ${theme.colors.green};
        /* background-color: red; */
      }
      :active {
        color: ${theme.colors.primary};
      }
    }

    .image {
      /* border: 2px solid green; */
      margin-top: 15px;
      margin-bottom: 10px;
      /* position: relative; */
      img {
        width: 100%;
        height: 100%;
        max-height: 150px;
        max-width: 200px;
        object-fit: contain;
      }

      .overlap {
        .overlap-image {
          /* border: 1px solid red; */
          top: 0;
          bottom: 0;
          margin: auto;
          position: absolute;
          left: 0;
          right: 0;
          width: 80%;
          height: 100%;
          z-index: 1;
          animation: ${fadeInFromTop} 500ms;
          border-radius: ${theme.borderRadius.extraRound};
        }

        .transparent-layer {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 70%;
          background: snow;
          z-index: 1;
          border-radius: ${theme.borderRadius.extraRound};
        }
      }
    }

    .text-info {
      /* display: grid;
      grid-template-rows: 30% 70%; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5px;

      .title {
        /* margin: auto 0; */
        display: flex;
        justify-content: center;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        max-width: 150px;
        text-overflow: ellipsis;
        font-family: "Amatic SC", cursive;
      }

      .description {
        /* display: grid;
        grid-template-columns: 1fr 1fr; */

        .left-description {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
        }

        /* .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};

          .primary-button {
            font-size: ${theme.fonts.size.XS};
            padding: 12px;
          }
        } */
      }
    }

    .primary-button {
      font-size: ${theme.fonts.size.XS};
      padding: 12px;
      /* background-color: green; */
      position: absolute;
      width: 74px;
      bottom: 25px;
      right: 25px;
    }

    ${({ isHoverable, isSelected }) =>
      isHoverable && isSelected && selectedStyle}
  }
`;

const hoverableStyle = css`
  :hover {
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};
  .primary-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .delete-button,
  .add-button {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }

  .text-info {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`;