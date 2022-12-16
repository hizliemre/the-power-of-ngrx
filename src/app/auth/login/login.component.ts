import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '@api';
import { LetModule } from '@ngrx/component';
import { SessionService } from '@state/session';
import { LoginPageService } from './+state';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, FormsModule, NgIf, LetModule],
  styles: [`:host { @apply flex-1 flex; }`],
  providers: [AuthApi],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LoginComponent {

  showPassword = false;
  form = this.createForm();
  state = inject(LoginPageService);
  sessionState = inject(SessionService);

  login(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    const { username, password } = this.form.getRawValue();
    this.state.login({ username, password });
  }

  createForm() {
    return inject(FormBuilder).group({
      username: new FormControl('atuny0', [Validators.required]),
      password: new FormControl('9uQFF1Lh', [Validators.required])
    });
  }

}
