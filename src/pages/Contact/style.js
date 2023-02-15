import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  height: calc(100vh - 150px);

  .contact__header {
    margin-bottom: 60px;

    @media (max-width: 765px) {
      font-size: 40px;
    }
  }

  .contact__subheader {
    font-size: 36px;
    margin-bottom: 30px;
    font-weight: 300;

    @media (max-width: 765px) {
      font-size: 16px;
      line-height: 30px;
    }
  }

  .contact__links-wrapper {
    list-style: none;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 765px) {
      display: block;
    }

    li {
      @media (max-width: 765px) {
        margin-bottom: 30px;
      }

      i {
        font-size: 40px;
        margin-right: 40px;

        @media (max-width: 765px) {
          font-size: 16px;
          margin-right: 20px;
        }
      }

      a {
        text-decoration: none;
        font-size: 34px;
        font-weight: 300;
        color: #000000;
        color: #fff;
        position: relative;
        cursor: pointer;

        @media (max-width: 765px) {
          font-size: 16px;
        }

        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: #074bf8;
          bottom: 0;
          left: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: all 0.25s ease-in-out;
        }
      }

      &:hover {
        i {
          color: #074bf8;
        }

        a {
          color: #074bf8;

          &:after {
            transform-origin: right;
            transform: scaleX(1);
          }
        }
      }
    }
  }

  .contact__buttonContainer {
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
