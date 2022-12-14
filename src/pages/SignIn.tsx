import { Heading } from '../components/Heading'
import { Logo } from '../Logo'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from '../components/Checkbox'
import { Button } from '../components/Button'
import { FormEvent, useState } from 'react'

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    function handleSignIn(event: FormEvent) {
        event.preventDefault();

        setIsUserSignedIn(true)
    }

    return (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center flex-col text-gray-100">
            <header className='flex flex-col items-center'>

                <Logo />

                <Heading size='lg'>
                    Ignite Lab
                </Heading>

                <Text size='lg' className='text-gray-400 mt-1'>
                    Faça login e comece a usar
                </Text>

            </header>

            <form onSubmit={handleSignIn} className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
                { isUserSignedIn && <Text>Login realizado!</Text> }

                <label htmlFor='email' className='flex flex-col gap-3'>

                    <Text className='font-semibold'>Endereço de e-mail</Text>
                    <TextInput.Root>

                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>

                        <TextInput.Input id="email" type="email" placeholder='yourname@example.com' />
                    </TextInput.Root>

                </label>

                <label htmlFor='password' className='flex flex-col gap-3'>

                    <Text className='font-semibold'>Sua senha</Text>
                    <TextInput.Root>

                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>

                        <TextInput.Input id="password" type="password" placeholder='********' />
                    </TextInput.Root>

                </label>

                <label htmlFor='remember' className='flex items-center gap-2'>

                    <Checkbox id="remember" />
                    <Text size='sm' className='text-gray-200'>
                        Lembrar de mim por 30 dias
                    </Text>

                </label>

                <Button type='submit' className='mt-4'>
                    Entrar na plataforma
                </Button>
            </form>

            <footer className='flex flex-col items-center gap-4 mt-8'>

                <Text asChild size='sm'>
                    <a href='' className='text-gray-400 transition-colors hover:text-gray-200 underline'>Esqueceu sua senha?</a>
                </Text>
                <Text asChild size='sm'>
                    <a href='' className='text-gray-400 transition-colors hover:text-gray-200 underline'>Não possui conta? Crie uma agora!</a>
                </Text>

            </footer>

        </div>
    )
}