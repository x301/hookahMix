import styled from 'styled-components'

export const PaginatorPages = styled.nav`
 display: flex;
justify-content: center; 
align-items: center;
padding:1%;
transition: all 0.15s ease;
height: 50px;
span {
    padding: 10px;
    font-size: 1.5rem;

    &:hover {
        :first-child {
            transform-origin: 0% 50%;
            transform: translate( 0, -1px ) rotate( 40deg ); 
        
    }
    :last-child {
       
        transform-origin: 100% 50%;
            transform: translate( 0, 1px ) rotate( -40deg ); 
        
    }
    }
    
}
ul {
    list-style: none;
    padding: 0;
    li {
        display: inline; 
       a {
        border: 2px solid #bdc3c7;
        font-size: 1.3rem;
        text-decoration: none;
        color: black;
        padding: .3rem .5rem;
        border-radius: 50% ;  
        &:focus{
            border-color: ${({ theme }) => theme.secondaryActive}; 
        };
        &:hover {
        border-color: ${({ theme }) => theme.secondaryHover}; 
        };
       };
    }
}
`

const Arrow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 1px;
  padding: 2%;
  cursor: pointer;
  

  div {
    height: 1rem;
    background: black;
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;
    
    
  }

  
`;

export const ArrowLeft = styled(Arrow)`
    
    div {
        
        transform-origin: 0% 50%;
        :first-child {
            width: 1.5rem;
            transform:  rotate(-40deg)
    }

        :last-child {
            width: 1.5rem;
            transform:  rotate(40deg)
    }
}

    &:hover {
        div {
            :first-child {
                transform:  rotate(-30deg)
    }

            :last-child {
                transform:  rotate(30deg)
    }
        } 
}
`

export const ArrowRight = styled(Arrow)`
    div {
        transform-origin: 100% 50%;
        :first-child {
            width: 1.5rem;
            transform: rotate(-40deg);
      
    }

    :last-child {
      width: 1.5rem;
      transform: rotate(40deg);
      
    }
}

    &:hover {

        div {
            :first-child {
                transform:  rotate(-30deg)
    }

            :last-child {
      
                transform:  rotate(30deg)
                }
        } 
}
`