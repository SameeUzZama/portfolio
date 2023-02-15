import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #fff;
  height: calc(100vh - 150px);

  @media (max-width: 765px) {
    height: calc(100vh - 150px);
  }
`;

export const AboutHeader = styled.h1`
  @media (max-width: 765px) {
    font-size: 40px;
  }
`;
export const AboutBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .about__details {
    font-size: 24px;
    font-weight: 300;
    line-height: 40px;

    @media (max-width: 765px) {
      font-size: 16px;
      line-height: 30px;
    }
  }

  .about__tech-section {
    &__header {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 30px;
      opacity: 0;
      transform: translate(-10px, 20px);
      transition: 0.5s ease-in-out;
      transition-property: opacity, transform;
      ${({ displayFive }) =>
        displayFive && "opacity: 1; transform: translate(0,0)"};

      @media (max-width: 765px) {
        font-size: 25px;
      }
    }

    &__category {
      font-size: 24px;
      font-weight: 300;
      margin-bottom: 15px;

      @media (max-width: 765px) {
        font-size: 16px;
      }

      span {
        display: inline-block;
        font-weight: 400;
        margin-right: 15px;
        transition: 0.5s ease-in-out;
        transform: translateX(-20px);
        opacity: 0;
        transition-property: opacity, transform;
        ${({ displaySix }) =>
          displaySix && "opacity: 1; transform: translateX(0px)"}
      }
    }
  }

  .about__buttonContainer {
    opacity: 0;
    transform: translateY(20px);
    transition-property: opacity, transform;
    transition: 0.5s ease-in-out;
    ${({ displayEight }) =>
      displayEight && "opacity: 1; transform: translateY(0px)"};

    a {
      font-size: 12px;
      border: none;
      color: #074bf8;
      color: #fff;
      background-color: transparent;
      cursor: pointer;
      font-weight: 600;
      font-style: italic;
      position: relative;
      text-decoration: none;

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #074bf8;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: all 0.25s ease-in-out;
      }

      &:hover {
        &:after {
          transform-origin: right;
          transform: scaleX(1);
        }
      }
    }

    span {
      display: inline-block;
      transform: translate(10px, 0px);
    }
  }
`;
