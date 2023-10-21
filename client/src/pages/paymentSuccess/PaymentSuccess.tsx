import { Box } from '@mui/material'

type Props = {}

const PaymentSuccess = (props: Props) => {
  return (
    <Box sx={{
      display: 'grid',
      placeContent:'center',
      minHeight: '65%',
    }}>

        <h1>Thank you for your order.</h1>
    </Box>
    
  )
}

export default PaymentSuccess