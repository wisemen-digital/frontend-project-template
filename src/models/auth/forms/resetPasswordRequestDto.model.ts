import { z } from 'zod'

const resetPasswordRequestDto = z.object({
  token: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  password_confirmation: z.string().min(8),
})

export type ResetPasswordRequestDto = z.infer<typeof resetPasswordRequestDto>
