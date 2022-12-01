import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '@api';
import { LetModule } from '@ngrx/component';
import { SessionService } from '@state/session';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, FormsModule, NgIf, LetModule],
  styles: [`:host { @apply flex-1 flex; }`],
  providers: [AuthApi],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LoginComponent {

  showPassword = false;
  form = this.#createForm();
  sessionState = inject(SessionService);

  login(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.sessionState.login(this.form.value);
  }

  #createForm() {
    return inject(FormBuilder).group({
      username: new FormControl('atuny0', [Validators.required]),
      password: new FormControl('9uQFF1Lh', [Validators.required])
    });
  }

}
