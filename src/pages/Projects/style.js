import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 140px;
`;

export const ProjectHeader = styled.h1`
  margin-bottom: 30px;
  color: #fff;

  @media (max-width: 765px) {
    font-size: 40px;
  }
`;

export const ProjectBodyTwo = styled.div`
  ul {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    margin-bottom: 20px;

    a {
      text-decoration: none;
    }
    .project {
      height: 250px;
      position: relative;
      cursor: pointer;
      overflow: hidden;

      &__info {
        position: relative;
        z-index: 3;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 30px;
        color: #fff;
        opacity: 0;

        h4 {
          margin-bottom: 10px;
          font-size: 2.4rem;
        }

        p {
          margin-bottom: 10px;
          font-size: 16px;
        }

        a {
          font-size: 14px;
          color: white;
        }

        .tag {
          position: absolute;
          bottom: 4px;
          right: 4px;
          font-weight: 600;
        }
      }

      &__image {
        background-color: rgba(255, 255, 255, 0.3);

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        transition: transform 200ms ease-in-out;
        will-change: transform;
      }

      &__overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background-color: rgba(0, 0, 0, 0.4);
        will-change: background-color;
        transition: background-color 200ms ease-in-out;
        z-index: 2;
      }

      &:hover {
        .project__info {
          opacity: 1;
        }

        .project__image {
          transform: scale(1.08);
        }

        .project__overlay {
          background-color: rgba(0, 0, 0, 0.9);
        }
      }
    }
  }

  .projects__buttonContainer {
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
      color: #fff;
    }
  }
`;
