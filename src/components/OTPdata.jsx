import React from 'react'
import VerifyOTP from './VerifyOTP'
function OTPdata({otpdata}) {
  return (
    <div>
      <VerifyOTP Otpdata={otpdata} />
    </div>
  )
}

export default OTPdata
