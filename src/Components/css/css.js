import styled from 'styled-components'


export let mobile = window.screen.width > 1099 ? false : true

export const ROWBUTTONS = {margin: mobile ? '40px 4% 60px 4%' : '110px 12%'}

export const VERE = {fontSize: mobile ? '1.5rem' : '2.2rem', textIndent:'0 !important'}

export const HR = styled.hr`
    border: 1px solid gray;
    margin-bottom: 35px;
    width: ${mobile ? '100%' : '90%'};
    border-radius: 5px;
`

export const HAMMER = styled.img`
    width: ${mobile ? '90%' : '60%'};
    display: block;
    margin: auto;
    padding: ${mobile ? '40px 0 20px 0' : '50px 0 20px 0'};
`

export const TITLE1 = styled.h1`
    text-align: center;
    font-size: ${mobile ? '2.2rem' : '3.7rem'};
    margin: ${mobile ? '0px auto 30px auto' : '25px auto 40px auto'};
    line-height: ${mobile ? '40px' : '50px'};
    text-indent: 0 !important;
    color: gray;
`

export const CHAPIMAGE = styled.img`
    max-width: ${mobile ? '90%' : '60%'};
    display: block;
    margin: ${mobile ? '40px auto 20px auto' : '70px auto 20px auto'};
`

export const TITLE2 = styled.h1`
    text-align: center;
    font-size: ${mobile ? '1.7rem' : '3rem'};
    max-width: ${mobile ? '80%' : '50%'};
    margin: ${mobile ? '30px auto 30px auto' : '70px auto 50px auto'};
    line-height: ${mobile ? '35px' : '50px'};
    text-indent: ${mobile ? '0 !important' : '0'};
`

export const UL = styled.ul`
    margin: ${mobile ? '20px 2%' : '30px 13%'};
    font-size: ${mobile ? '0.9rem' : '1.5rem'};
    padding-left: 0px;
    text-indent: ${mobile ? '20px' : '35px'};
`

export const ULANCHOR = styled.ul`
    margin: ${mobile ? '10px 5%' : '35px 13%'};
    font-size: ${mobile ? '0.9rem' : '1.5rem'};
    padding-left: 0px;
    text-indent: 40px;
    font-weight: 550;
`

export const SUBTITLE = styled.div`
    text-align: center;
    font-size: ${mobile ? '1.5rem' : '2rem'};
    margin: ${mobile ? '45px auto 20px auto' : '70px auto 30px auto'};
    line-height: ${mobile ? '30px' : '50px'};
    max-width: ${mobile ? '80%' : '100%'};
    text-indent: 0 !important;
`

// export const PREBODY = styled.div`
//     padding: 100px;
//     margin-top: ${mobile ? '0' : '60px'};
//     line-height: ${mobile ? '25px' : '35px'};
//     text-indent: 30px;
// `

export const BUTTON = styled.button`
    width: 100%;
    display: block;
    margin: ${mobile ? '25px 140px auto auto' : 'auto 140px auto auto'};
    font-size: ${mobile ? '1.2rem' : '1.5rem'};
    border-radius: 12px;
    height: ${mobile ? '50px' : '60px'};
    color: #007bff;
`

export const SPECIALRIGHT = styled.div`
    margin: ${mobile ? '0 3%' : '0 5%'};
    text-indent: 0px;
    line-height: 25px;
`

export const CENTER = styled.div`
    display: block;
    margin: ${mobile ? '25px auto' : '35px auto'};
    text-align: center;
    font-size: ${mobile ? '1rem' : '2rem'};
`

export const IMAGECENTER = styled.img`
    display: block;
    margin: ${mobile ? '22px auto' : '10px auto 40px auto !important'};
    width: ${mobile ? '90% !important' : '40% !important'};
`

export const INDEX = styled.div`
    padding: 10px 0;
    font-size: 2.2rem;
    line-height: 25px;
    text-align: left;
    text-indent: 0;
`

export const LOGOFOOTER = styled.img`
    max-width: ${mobile ? '55%' : '25%'};
    display: block;
    margin: ${mobile ? '0 auto 10px auto' : '40px auto 40px auto'};
`

export const FOOT = styled.div`
    text-align: justify;
    color: gray;
    paddingTop: 50px;
`

export const PRESENTATION = styled.div`
    padding: ${mobile ? '0 5%' : '0 15%'};
    font-size: ${mobile ? '0.9rem' : '1.5rem'};
    margin-top: ${mobile ? '0' : '60px'};
`

export const FIRM = styled.p`
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    line-height: ${mobile ? '0' : '20px'};
    text-indent: 40px;
    margin-top: 40px;
    text-align: right;
`

export const PRESENTATIONP = styled.p`
    line-height: ${mobile ? '26px !important' : '36px important!'};
    text-indent: ${mobile ? '20px' : '40px'};
`
