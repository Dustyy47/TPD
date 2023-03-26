import { AuthForm } from '@/components/Forms/AuthForm';
import { Input } from '@/components/UI/Input/Input';
import { InputsGroup } from '@/components/UI/Input/InputsGroup';

export default function Login() {
  return (
    <AuthForm onSubmit={() => {}} isLoginForm>
      <InputsGroup label='Почта'>
        <Input placeholder='Введите почту' />
      </InputsGroup>
      <InputsGroup label='Пароль'>
        <Input placeholder='Введите пароль' />
      </InputsGroup>
    </AuthForm>
  );
}