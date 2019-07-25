import styled from "styled-components";

export const Wrap = styled.div`
.each-slide div{
  height: 500px;
  object-fit: cover;
  overflow: hidden;


}

.each-slide img{

  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  box-sizing: border-box;
}


.indicators div{
  display: none;
  height: 0px;
  margin:0 ;
  padding 0;
}
`;
