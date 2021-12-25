import { AbstractControl } from '@angular/forms';

export function passwordCheck(
  control: AbstractControl
): /* { [key: string]: any } */ any | null {
  if (control) {
  
    if (!control.value.match(/[A-Z]/)) {
      return { PasswordError: { value: 'Upper case required' } };
    }
    if (!control.value.match(/[a-z]/)) {
      return { PasswordError: { value: 'Lower case required' } };
    }
    if (control.value.match(/^[A-Za-z0-9 ]+$/)) {
      return { PasswordError: { value: 'Special Character required' } };
    }
    if (!control.value.match(/[0-9]/)) {
      return { PasswordError: { value: 'Number is required' } };
    } else {
      return null;
    }
  }
}
