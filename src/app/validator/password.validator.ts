import { AbstractControl } from '@angular/forms';

export function passwordCheck(
  control: AbstractControl
): /* { [key: string]: any } */ any | null {
  if (control) {
  
    if (!control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{4,}$/)) {
      return { PasswordError: { value: 'Pratten Not Mtaching' } };
    }
  else {
      return null;
    }
  }
}
