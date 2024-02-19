import type { CurrentUser, CurrentUserDto } from '@/models/auth/currentUser.model.ts'
import type { ForgotPasswordForm } from '@/models/auth/forms/forgotPasswordForm.model.ts'
import type { ForgotPasswordRequestDto } from '@/models/auth/forms/forgotPasswordRequestDto.model.ts'
import type { LoginForm } from '@/models/auth/forms/loginForm.model.ts'
import type { LoginRequestDto } from '@/models/auth/forms/loginRequestDto.model.ts'
import type { ResetPasswordForm } from '@/models/auth/forms/resetPasswordForm.model.ts'
import type { ResetPasswordRequestDto } from '@/models/auth/forms/resetPasswordRequestDto.model.ts'

export function mapLoginFormToLoginRequestDto(data: LoginForm): LoginRequestDto {
	return {
		username: data.email,
		password: data.password,
	}
}

export function mapForgotPasswordFormToForgotPasswordRequestDto(data: ForgotPasswordForm): ForgotPasswordRequestDto {
	return {
		email: data.email,
	}
}

export function mapResetPasswordFormToResetPasswordRequestDto(
	data: ResetPasswordForm & { token: string; email: string }
): ResetPasswordRequestDto {
	return {
		token: data.token,
		email: data.email,
		password: data.password,
		passwordConfirmation: data.password,
	}
}

export function mapCurrentUserDtoToCurrentUser(data: CurrentUserDto): CurrentUser {
	return {
		id: data.id,
		email: data.email,
		firstName: data.firstName,
		lastName: data.lastName,
		fullName: `${data.firstName} ${data.lastName}`,
	}
}
