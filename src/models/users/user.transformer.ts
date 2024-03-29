import type { UserCreateDto } from './create/userCreateDto.model'
import type { UserCreateForm } from './create/userCreateForm.model'
import type { User } from './detail/user.model'
import type { UserDto } from './detail/userDto.model'
import type { UserIndex } from './index/userIndex.model'
import type { UserIndexDto } from './index/userIndexDto.model'
import type { UserUpdateDto } from './update/userUpdateDto.model'
import type { UserUpdateForm } from './update/userUpdateForm.model'

export function transformUserIndexDtoToUserIndex(dto: UserIndexDto): UserIndex {
  return {
    firstName: dto.firstName,
    fullName: `${dto.firstName} ${dto.lastName}`,
    lastName: dto.lastName,
    uuid: dto.uuid,
  }
}

export function transformUserDtoToUser(dto: UserDto): User {
  return {
    firstName: dto.firstName,
    fullName: `${dto.firstName} ${dto.lastName}`,
    lastName: dto.lastName,
    uuid: dto.uuid,
  }
}

export function transformUserCreateFormToUserCreateDto(form: UserCreateForm): UserCreateDto {
  return {
    firstName: form.firstName,
    lastName: form.lastName,
  }
}

export function transformUserUpdateFormToUserUpdateDto(form: UserUpdateForm): UserUpdateDto {
  return {
    firstName: form.firstName,
    lastName: form.lastName,
  }
}

export function transformUserToUpdateUserForm(user: User): UserUpdateForm {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
  }
}
