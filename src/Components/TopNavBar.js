import Styled from 'styled-components'

const TopNavBar = Styled.div `
position: sticky;
top: 0;
margin-bottom: 0px;
z-index: 3;
box-sizing: border-box;
width: 100%;
background-color: #00718a;
padding: 11px 12px;
box-shadow: 0 3px 24px -10px #000;
border-radius: .1px; 
display: flex;
align-items: center;
justify-content:  first baseline;
font-weight: bold;
font-size: 1em;
`

export default TopNavBar