import styled from "styled-components";

export const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  background: #eee;

  h1 {
    font-size: 2rem;
    margin: 15px;
  }

  h2 {
    font-size: 1.5rem;
    margin: 10px;
  }

  button {
    width: 80%;
    background-color: var(--white);
    color: var(--background);
    font-weight: bold;
    height: 40px;
  }
`;

export const HeadContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 100%;
text-align: center;
margin: 0 auto;
background: cornflowerblue;
color: white;
align-items: normal;
padding: 20px;

img {
  height: 250px;
  width: 200px;
  border: 1px solid #000;
}

p {
  margin-bottom: 10px;
}

.imgDiv {
  display: inline-block;
  margin-right: 30px;
}

.sideHeader {
  display: inline-block;
}

.headData {
  display: inline-block;
  width: 50%;
  text-align: left;
  vertical-align: top;
}
`;

export const InfoContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  max-width: 640px;
  margin: 10px auto;
  border-bottom: 1px solid #ccc;

  h2 {
    text-align: center;
    font-size: 2rem;
    color: blue;
    margin: 30px 0;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  div {
    border: 3px solid blue;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
  }
`;
