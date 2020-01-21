import styled from "styled-components"

const Button = styled.button`
  font-weight: 400;
  font-size: 1em;
  padding: 5px 5px;
  text-decoration: none;
  border-width: 1px;
  border-radius: 7px;
  transition: 0.2s;
  cursor: pointer;       
`


export const FindMixesBtn = styled(Button)`
background-color:${({ theme }) => theme.secondaryDark};
color: ${({ theme }) => theme.primaryLight};
border: 1px solid ${({ theme }) => theme.secondaryDark};
font-family: "RobotoLight";
box-shadow: 0 0 10px ${({ theme }) => theme.secondaryDark};
font-size: 1.3em;
&:hover {
}
`;

export const CleanBlenderBtn = styled(Button)`
`;