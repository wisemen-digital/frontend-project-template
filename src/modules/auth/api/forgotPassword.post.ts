import { z } from 'zod'

import type { UseMutationReturnType } from '@/composables/core/useMutation.ts'
import { useMutation } from '@/composables/core/useMutation.ts'
import { unauthorizedHttpClient } from '@/libs/http.lib.ts'
import type { ForgotPasswordRequestDto } from '@/models/auth/forms/forgotPasswordRequestDto.model.ts'
import { mapForgotPasswordFormToForgotPasswordRequestDto } from '@/transformers/auth.transformer.ts'

export function useForgotPassword(): UseMutationReturnType<ForgotPasswordRequestDto, void> {
	return useMutation<ForgotPasswordRequestDto, void>({
		queryFn: ({ body }) =>
			unauthorizedHttpClient.post({
				url: '/forgot-password',
				body: mapForgotPasswordFormToForgotPasswordRequestDto(body),
				responseSchema: z.any(),
			}),
		queryKeysToInvalidate: [],
	})
}
