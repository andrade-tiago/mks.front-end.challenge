import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const Wrapper = tw.div`
  w-full min-h-screen
  flex flex-col gap-5 items-center justify-center
  p-2
  text-center
`
const ErrorTitle = tw.h1`
  text-primary text-3xl font-bold
`
const ErrorMessage = tw.p`
  text-black text-lg
`
const HomeLink = tw(Link)`
  bg-primary
  text-white font-medium
  rounded-lg
  py-2 px-3
`

const ErrorPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Error | MKS Sistemas'  
  }, [])

  return (
    <Wrapper>
      <ErrorTitle>
        Oops!
      </ErrorTitle>
      <ErrorMessage>
        Desculpe, parece que houve um erro inesperado :/
      </ErrorMessage>
      <HomeLink to="/home">
        Voltar ao início
      </HomeLink>
    </Wrapper>
  )
}

export default ErrorPage
