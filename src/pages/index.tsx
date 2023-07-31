import { styled } from "../styles"

const Button = styled('button',{
  backgroundColor: '$green500',
  borderRadius: 2,
  border: 'none',
  padding: '4px 8px',
  color: '#ffffff',

  '&:hover':{
    filter:'brightness(0.9)',
    cursor: 'pointer'
  }
})

export default function Home() {
  return (
    <Button>
      Hello 
    </Button>
  )
}
