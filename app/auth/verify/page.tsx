import { Button } from '@/components/tui/button'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/tui/input-otp'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function OtpVerify({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const phone = searchParams?.phone
  const onSubmit = async (formData) => {
    'use server'
    const supabase = createClient(cookies())
    const otp = formData.get('otp')
    const { data, error } = await supabase.auth.verifyOtp({
      phone: phone,
      token: otp,
      type: 'sms',
    })
    console.log(data)
    if (error) {
      console.log(error)
    }

    console.log(otp)
    redirect('/account/founder')
  }
  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-muted-foreground text-sm">Enter the 6 Digit OTP sent to your phone</p>
        </div>
        <div className="w-full">
          <form action={onSubmit}>
            <InputOTP maxLength={6} name="otp" id="otp">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Button className="mt-6 w-full">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
