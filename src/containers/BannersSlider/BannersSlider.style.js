import styled from 'styled-components';
import withTheme from '../../config/themes/withTheme';
import { medialg, mediasmAndDown } from '../../config/style-config';

export const Wrapper = withTheme(styled.div`
  width: 100vw;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  border: none;
  position: relative;

  .ant-carousel {
    height: 100%;
    
    .slick-slider {
      height: 100%;
      
      .slick-dots {
        position: absolute;
        bottom: 10px;
        display: flex !important;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        li.slick-active button {
          background-color: ${({ theme }) => theme.palette.bgColor[1]};
          box-shadow: none;
        }
        li.slick-active {
          box-shadow: none;
          border: none;
        }
        
        button {
          padding: 0;
          height: 10px;
          width: 10px;
          margin-right: 5px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.palette.bgColor[0]};
          border-color: ${({ theme }) => theme.palette.bgColor[1]};
          color: transparent;
          font-size: 0px;
        }
      }
      
      .slick-list {
        height: 100%;
        .slick-track {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-end;
          height: 100%;
          .slick-slide > div {
            height: 100%;
          }
        }
      }
    }
  }

  // &:after {
  //   content: '';
  //   position: relative;
  //   display: inline-block;
  //   width: 1px;
  //   height: 1px;
  //   border-radius: 50%;
  //   box-shadow: 0px 0px 150px 300px rgba( ${({ theme }) => theme.palette.rgba[0]}, .5);
  //   background-color: ${({ theme }) => theme.palette.bgColor[4]};
  //   bottom: 0px;
  //   left: 90%;
  //   opacity: .4;
  //   z-index: -1;
  // }
  
  @media ${mediasmAndDown} {
    border-bottom: 1px solid #dbe1e6;
  }

`);

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
`;
